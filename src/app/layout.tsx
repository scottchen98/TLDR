import { ScrollText } from "lucide-react";

import Link from "next/link";
import NavBarSheet from "@/components/nav-bar-sheet";
import NavBar from "@/components/nav-bar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLDR",
  description:
    "TLDR a web app that helps you quickly grasp the key points of any webpage. Simply paste a URL, and TLDR will extract the main content and provide you with a concise summary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2 pt-2">
              <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="hidden items-center gap-2 font-semibold md:flex"
                >
                  <ScrollText className="h-6 w-6" />
                  <span className="text-lg">TLDR</span>
                </Link>
              </div>
              <div className="flex-1">
                <NavBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="pl-3 pt-3 md:p-0">
              <NavBarSheet />
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
