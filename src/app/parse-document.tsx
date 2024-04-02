"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { extractArticleInformation } from "./helpers";
import { summarizeTextAndCreateWebpage } from "./actions";
import { SummarySkeleton } from "@/components/summary-skeleton";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type SummarizedPage = {
  title: string;
  summary: string;
} | null;
export default function ParseDocument({
  htmlString,
  url,
}: {
  htmlString: string;
  url: string;
}) {
  const [summarizedPage, setSummarizedPage] = useState<SummarizedPage>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function createArticle() {
      setSummarizedPage(null);
      setErrorMessage("");

      const article = extractArticleInformation(htmlString);
      if (!article)
        return setErrorMessage("Failed to extract article information");

      const summarizedPage = await summarizeTextAndCreateWebpage(
        article.textContent,
        "1",
        url,
        article.title,
      );
      if ("error" in summarizedPage)
        return setErrorMessage(summarizedPage.error);

      const { title, summary } = summarizedPage;
      setSummarizedPage({ title, summary });
    }
    createArticle();
  }, [htmlString, url]);

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
