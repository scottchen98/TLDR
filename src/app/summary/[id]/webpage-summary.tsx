"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type WebpageSummaryProps = {
  url: string;
  title: string;
  summary: string;
  fromSummarizer: string | undefined;
};
export default function WebpageSummary({
  url,
  title,
  summary,
  fromSummarizer,
}: WebpageSummaryProps) {
  return (
    <div className="mt-2 px-8 py-8">
      {fromSummarizer ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Link
              href={url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-10 text-2xl font-bold tracking-wide"
          >
            {title}
          </motion.h1>
          <TextGenerateEffect words={summary} className="font-normal" />
        </>
      ) : (
        <>
          {/* intentionally swap the div and h1 to trigger rerender */}
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Link
              href={url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </Link>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-10 text-2xl font-bold tracking-wide"
          >
            {title}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-5 text-pretty text-lg leading-snug text-foreground"
          >
            {summary}
          </motion.p>
        </>
      )}
    </div>
  );
}
