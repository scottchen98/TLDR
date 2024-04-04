"use client";

import { Link as LinkUrl } from "lucide-react";
import { motion } from "framer-motion";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSummarizationStore } from "./summarization-store";
import { Input } from "@/components/ui/input";
import { isValidUrl } from "./helpers";

export default function UrlQuery() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const [urlQuery, setUrlQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isSummarizing = useSummarizationStore((state) => state.isSummarizing);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUrl(urlQuery)) {
      setErrorMessage("Invalid URL. Please try again.");
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.delete("from_summarizer");
    urlQuery ? params.set("query", urlQuery) : params.delete("query");

    setUrlQuery("");
    setErrorMessage("");
    push(`/summary?${params.toString()}`);
  }

  return (
    <div className="mt-[76px] flex flex-col gap-4 px-4 pb-4 md:p-6 lg:gap-6">
      <div className="flex flex-1 items-start justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
            Past a URL for a quick summary.
          </h3>
          <div className="w-full flex-1">
            <form onSubmit={onSubmit}>
              <div className="relative">
                <LinkUrl className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Enter a URL here..."
                  className={`w-full appearance-none border-x-0 border-b-2 border-t-0 bg-background pl-8 shadow-none ${isSummarizing ? "cursor-not-allowed" : ""}`}
                  value={urlQuery}
                  onChange={(e) => setUrlQuery(e.target.value)}
                  disabled={isSummarizing}
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      {errorMessage && (
        <p className="text-center text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
