import { Plus, ScrollText } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";
import NavBarSheet from "@/components/nav-bar-sheet";
import NavBar from "@/components/nav-bar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLDR",
  description:
    "TLDR a web app that helps you quickly grasp the key points of any webpage. Simply paste a URL, and TLDR will extract the main content and provide you with a concise summary.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className={`hidden bg-muted/40 ${isAuth ? "md:block" : ""}`}>
            <div className="flex h-full max-h-dvh flex-col gap-2 pt-2">
              <div className="mt-2 flex h-32 flex-col justify-center gap-12 px-4 md:px-2 lg:px-4">
                <Link
                  href="/"
                  className="hidden w-fit items-center gap-2 font-semibold md:flex"
                >
                  <ScrollText className="h-6 w-6" />
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
                    TLDR
                  </span>
                </Link>
                <Link href="/summary" className="h-10 w-[60%] rounded-full">
                  <Button className="w-full space-x-1 rounded-full bg-[#eeeeee] pr-[22px] text-xs text-[#b0b0b0] hover:cursor-pointer hover:bg-[#f3f3f3] lg:space-x-2 lg:text-sm">
                    <span>
                      <Plus className="h-4 w-4 lg:h-5 lg:w-5" />
                    </span>
                    <span>New summary</span>
                  </Button>
                </Link>
              </div>
              <div className="mb-3 flex-1 overflow-y-auto">
                <NavBar />
              </div>
              <Profile />
            </div>
          </div>
          <div className={`flex flex-col ${!isAuth ? "w-dvw" : ""}`}>
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
