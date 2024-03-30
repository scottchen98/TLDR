import { ScrollText } from "lucide-react";

import Link from "next/link";
import NavBarSheet from "@/components/nav-bar-sheet";
import NavBar from "@/components/nav-bar";
import Profile from "@/components/profile";
import UrlSummarizer from "./url-summarizer";

export function Dashboard({ query }: { query: string | undefined }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ScrollText className="h-6 w-6" />
              <span className="">TLDR</span>
            </Link>
          </div>
          <div className="flex-1">
            <NavBar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <NavBarSheet />
          <Profile />
        </header>

        <UrlSummarizer query={query} />
      </div>
    </div>
  );
}
