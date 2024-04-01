"use client";

import { SummarySkeleton } from "@/components/summary-skeleton";

import { useEffect, useState } from "react";
import { extractArticleInformation } from "./helpers";
import { summarizeTextAndCreateWebpage } from "./actions";

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
      <h1 className="text-2xl font-bold tracking-wide">
        {summarizedPage?.title}
      </h1>
      <p className="text-pretty">{summarizedPage?.summary}</p>
    </div>
  );
}
