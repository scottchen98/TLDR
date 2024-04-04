"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Greeting() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="flex flex-col gap-3 text-center text-5xl font-semibold md:text-6xl lg:text-7xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Read less. Know more.{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-bold text-transparent">
            TLDR.
          </span>
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-9 space-x-5"
      >
        <Link href="/summary">
          <Button
            variant="outline"
            className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm"
          >
            Sign in
          </Button>
        </Link>
        <Link href="/summary">
          <Button className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm">
            Sign up
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
