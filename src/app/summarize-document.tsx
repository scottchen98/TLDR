"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { useSummarizationStore } from "./summarization-store";
import { extractArticleInformation } from "./helpers";
import { summarizeTextAndCreateWebpage } from "./actions";
import { SummarySkeleton } from "@/components/summary-skeleton";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type SummarizedPage = {
  title: string;
  summary: string;
} | null;
export default function SummarizeDocument({
  htmlString,
  url,
}: {
  htmlString: string;
  url: string;
}) {
  const [summarizedPage, setSummarizedPage] = useState<SummarizedPage>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const setIsSummarizing = useSummarizationStore(
    (state) => state.setIsSummarizing,
  );

  useEffect(() => {
    async function createArticle() {
      if (!htmlString) return;
      setSummarizedPage(null);
      setErrorMessage("");
      setIsSummarizing(true);

      const article = extractArticleInformation(htmlString);
      if (!article) {
        setIsSummarizing(false);
        return setErrorMessage("Failed to extract article information");
      }

      const summaryResult = await summarizeTextAndCreateWebpage(
        article.textContent,
        "1",
        url,
        article.title,
      );
      if ("error" in summaryResult) {
        setIsSummarizing(false);
        return setErrorMessage(summaryResult.error);
      }

      const { title, summary } = summaryResult;
      setSummarizedPage({ title, summary });
      setIsSummarizing(false);
    }
    createArticle();
  }, [htmlString, url, setIsSummarizing]);

  if (!summarizedPage && !errorMessage) return <SummarySkeleton />;
  if (errorMessage)
    return <p className="text-center text-red-500">{errorMessage}</p>;
  return (
    <div className="mt-10 space-y-4 px-8 py-8">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="text-2xl font-bold tracking-wide"
      >
        {summarizedPage?.title}
      </motion.h1>
      <TextGenerateEffect
        words={summarizedPage?.summary || ""}
        className="font-normal"
      />
    </div>
  );
}
