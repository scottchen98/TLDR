"use client";

import { SummarySkeleton } from "@/components/summary-skeleton";

import { useEffect, useState } from "react";
import { extractArticleInformation } from "./helpers";
import { handleCreate as createWebpage } from "./actions";

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

  useEffect(() => {
    async function createArticle() {
      setSummarizedPage(null);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const article = extractArticleInformation(htmlString);
      if (!article) return;
      const newPage = await createWebpage({
        userId: "1",
        url,
        title: article.title,
        summary: article.textContent,
      });
      if (!newPage) return;
      const { title, summary } = newPage;
      setSummarizedPage({ title, summary });
    }
    createArticle();
  }, [htmlString, url]);

  if (!summarizedPage) return <SummarySkeleton />;
  return (
    <div className="space-y-4 px-8 py-8">
      <h1 className="text-2xl font-bold">{summarizedPage?.title}</h1>
      <p className="text-pretty">{summarizedPage?.summary}</p>
    </div>
  );
}
