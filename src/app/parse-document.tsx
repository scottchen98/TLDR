"use client";

import { Readability } from "@mozilla/readability";

import { useEffect, useState } from "react";

type Article = {
  title: string;
  content: string;
  textContent: string;
  length: number;
  excerpt: string;
  byline: string;
  dir: string;
  siteName: string;
  lang: string;
  publishedTime: string;
} | null;
export default function ParseDocument({ htmlString }: { htmlString: string }) {
  const [article, setArticle] = useState<Article>(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const article = new Readability(doc).parse();
    setArticle(article);
  }, [htmlString]);

  return (
    <>
      <h1>{article?.title}</h1>
      <p>{article?.textContent}</p>
    </>
  );
}
