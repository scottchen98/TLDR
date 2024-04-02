"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Greeting() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="flex flex-col gap-3 text-center text-4xl font-medium md:text-5xl lg:text-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          Hello, Scott
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-[#c4c7c5]"
        >
          Summarize a webpage!
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-9"
      >
        <Link href="/summary">
          <Button className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm">
            GET STARTED
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
