"use client";

import { useEffect, useState } from "react";
import { useSummarizationStore } from "./summarization-store";
import { extractArticleInformation } from "./helpers";
import { summarizeTextAndCreateWebpage } from "./actions";
import { SummarySkeleton } from "@/components/summary-skeleton";
import { useRouter } from "next/navigation";

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
  const [errorMessage, setErrorMessage] = useState("");
  const isSummarizing = useSummarizationStore((state) => state.isSummarizing);
  const setIsSummarizing = useSummarizationStore(
    (state) => state.setIsSummarizing,
  );
  const { push } = useRouter();

  useEffect(() => {
    async function createArticle() {
      if (!htmlString) return;
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

      setIsSummarizing(false);
      push(`/summary/${summaryResult.id}?from_summarizer=true`);
    }
    createArticle();
  }, [htmlString, url, setIsSummarizing, push]);

  if (htmlString && url && isSummarizing && !errorMessage)
    return <SummarySkeleton />;
  if (errorMessage)
    return <p className="text-center text-red-500">{errorMessage}</p>;
}
