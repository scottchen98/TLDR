import { Menu, ScrollText, Plus } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { getCurrentUserWebpages } from "@/db/queries/webpages";
import NavBarSheetItem from "./nav-bar-sheet-item";
import Profile from "./profile";

export default async function NavBarSheet() {
  const { getUser } = getKindeServerSession();
  const sessionUser = await getUser();
  if (!sessionUser) return;

  const pages = await getCurrentUserWebpages.all({ userId: sessionUser.id });

  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex h-full max-h-dvh flex-col gap-2 pt-2">
          <div className="mt-2 flex h-28 flex-col justify-center gap-8">
            <Link
              href="/summary"
              className="mb-0 flex items-center gap-2 text-lg font-semibold"
            >
              <ScrollText className="h-6 w-6" />
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
                TLDR
              </span>
              <span className="sr-only">TLDR</span>
            </Link>
            <Link href="/summary" className="my-5 h-10 w-[50%] rounded-full">
              <Button className="w-full space-x-1 rounded-full bg-[#eeeeee] pr-[22px] text-sm text-[#b0b0b0] hover:cursor-pointer hover:bg-[#f3f3f3]">
                <span>
                  <Plus className="h-4 w-4 lg:h-5 lg:w-5" />
                </span>
                <span>New summary</span>
              </Button>
            </Link>
          </div>
          <div className="mb-3 flex-1 overflow-y-auto">
            <nav className="grid gap-1 text-lg font-medium">
              <div className="overflow-auto">
                {pages.map((page) => (
                  <NavBarSheetItem key={page.id} webpage={page} />
                ))}
              </div>
            </nav>
          </div>
          <Profile className="m-auto mb-2 w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
