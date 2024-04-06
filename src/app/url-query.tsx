"use client";

import { Link as LinkUrl } from "lucide-react";
import { motion } from "framer-motion";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSummarizationStore } from "./summarization-store";
import { Input } from "@/components/ui/input";
import { isValidUrl } from "./helpers";
import { webpageExists } from "./actions";

export default function UrlQuery() {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const [urlQuery, setUrlQuery] = useState("");
  const { user } = useKindeBrowserClient();

  const isSummarizing = useSummarizationStore((state) => state.isSummarizing);
  const errorMessage = useSummarizationStore((state) => state.errorMessage);
  const setErrorMessage = useSummarizationStore(
    (state) => state.setErrorMessage,
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.delete("from_summarizer");

    // check if the URL is valid
    if (!isValidUrl(urlQuery)) {
      setUrlQuery("");
      setErrorMessage("Invalid URL. Please try again.");
      replace(`/summary?${params.toString()}`);
      return;
    }

    if (urlQuery) {
      // check if the webpage has already been summarized
      if (!user) return;
      const isWebpageExist = await webpageExists(user.id, urlQuery);
      if (isWebpageExist) {
        setUrlQuery("");
        setErrorMessage("URL has already been summarized.");
        replace(`/summary?${params.toString()}`);
        return;
      }
      params.set("query", urlQuery);
    } else {
      params.delete("query");
    }

    setUrlQuery("");
    setErrorMessage("");
    push(`/summary?${params.toString()}`);
  }

  return (
    <div className="mt-28 flex flex-col gap-4 px-4 pb-4 md:mt-[76px] md:p-6 lg:gap-6">
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
