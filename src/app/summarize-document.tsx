"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { useEffect } from "react";
import { useSummarizationStore } from "./summarization-store";
import { extractArticleInformation, summarizeText } from "./helpers";
import { createWebpage } from "./actions";
import { SummarySkeleton } from "@/components/summary-skeleton";
import { useRouter } from "next/navigation";

export default function SummarizeDocument({
  htmlString,
  url,
}: {
  htmlString: string;
  url: string;
}) {
  const isSummarizing = useSummarizationStore((state) => state.isSummarizing);
  const errorMessage = useSummarizationStore((state) => state.errorMessage);
  const setErrorMessage = useSummarizationStore(
    (state) => state.setErrorMessage,
  );
  const setIsSummarizing = useSummarizationStore(
    (state) => state.setIsSummarizing,
  );
  const { push } = useRouter();
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    async function createArticle() {
      if (!user) return;
      if (!htmlString && !url) return;

      // begin summarizing the article
      setErrorMessage("");
      setIsSummarizing(true);

      // extract article information
      const article = extractArticleInformation(htmlString);
      if (!article) {
        setIsSummarizing(false);
        return setErrorMessage("Failed to extract article information.");
      }

      // summarize the article
      const summarizedText = await summarizeText(article.textContent);
      if (summarizedText.error) {
        setIsSummarizing(false);
        return setErrorMessage(summarizedText.error);
      }

      // save to database
      const savedWebpage = await createWebpage({
        userId: user.id,
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
  }, [htmlString, url, setIsSummarizing, push, user, setErrorMessage]);

  if (htmlString && url && isSummarizing && !errorMessage)
    return <SummarySkeleton />;
}
