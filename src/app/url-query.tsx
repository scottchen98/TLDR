"use client";

import { Link as LinkUrl } from "lucide-react";
import { motion } from "framer-motion";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { isValidUrl } from "./helpers";

export default function UrlQuery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [urlQuery, setUrlQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUrl(urlQuery)) {
      setErrorMessage("Invalid URL. Please try again.");
      return;
    }

    const params = new URLSearchParams(searchParams);

    urlQuery ? params.set("query", urlQuery) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    setUrlQuery("");
    setErrorMessage("");
  }

  return (
    <div className="flex flex-col gap-4 px-4 pb-4 pt-9 lg:gap-6 lg:px-6 lg:pb-6 lg:pt-9">
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
                  className="w-full appearance-none border-x-0 border-b-2 border-t-0 bg-background pl-8 shadow-none"
                  value={urlQuery}
                  onChange={(e) => setUrlQuery(e.target.value)}
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
