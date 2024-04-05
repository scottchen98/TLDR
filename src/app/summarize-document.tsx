"use client";

import { useEffect, useState } from "react";
import { useSummarizationStore } from "./summarization-store";
import { extractArticleInformation, summarizeText } from "./helpers";
import { createWebpage, webpageExists } from "./actions";
import { SummarySkeleton } from "@/components/summary-skeleton";
import { useRouter } from "next/navigation";

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

      // check if the article is already summarized
      const isWebpageExist = await webpageExists("1", url);
      if (isWebpageExist)
        return setErrorMessage("URL has already been summarized.");

      // begin summarizing the article
      setIsSummarizing(true);
      const article = extractArticleInformation(htmlString);
      if (!article) {
        setIsSummarizing(false);
        return setErrorMessage("Failed to extract article information");
      }

      const summarizedText = await summarizeText(article.textContent);
      if (summarizedText.error) {
        setIsSummarizing(false);
        return setErrorMessage(summarizedText.error);
      }

      const savedWebpage = await createWebpage({
        userId: "1",
        url,
        title: article.title,
        summary: summarizedText,
      });
      if ("error" in savedWebpage) {
        setIsSummarizing(false);
        return setErrorMessage(savedWebpage.error);
      }

      setIsSummarizing(false);
      push(`/summary/${savedWebpage.id}?from_summarizer=true`);
    }
    createArticle();
  }, [htmlString, url, setIsSummarizing, push]);

  if (htmlString && url && isSummarizing && !errorMessage)
    return <SummarySkeleton />;
  if (errorMessage)
    return <p className="text-center text-red-500">{errorMessage}</p>;
}
