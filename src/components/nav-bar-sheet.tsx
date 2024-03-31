import {
  Menu,
  Link as LinkUrl,
  ScrollText,
  EllipsisVertical,
  Trash2,
  Plus,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import { getCurrentUserWebpages } from "@/db/queries/webpages";
import DeleteLink from "./delete-link";

export default async function NavBarSheet() {
  const pages = await getCurrentUserWebpages.all({ userId: "1" });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-1 text-lg font-medium">
          <Link
            href="/"
            className="mb-5 flex items-center gap-2 text-lg font-semibold"
          >
            <ScrollText className="h-6 w-6" />
            TLDR
            <span className="sr-only">TLDR</span>
          </Link>
          <Link href="/summary" className="my-5 h-10 w-[50%] rounded-full">
            <Button className="w-full space-x-1 rounded-full bg-[#eeeeee] pr-[22px] text-sm text-[#b0b0b0] hover:cursor-pointer hover:bg-[#eeeeee]">
              <span>
                <Plus className="h-4 w-4 lg:h-5 lg:w-5" />
              </span>
              <span>New summary</span>
            </Button>
          </Link>
          {pages.map((page) => (
            <div
              key={page.url}
              className="group relative min-w-full rounded-full py-2 pl-3 pr-10 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
            >
              <Link
                href={`/summary/${page.id}`}
                className="flex items-center gap-3"
              >
                <span>
                  <LinkUrl className="h-4 w-4" />
                </span>
                <span className="line-clamp-1 overflow-hidden text-ellipsis">
                  {page.url}
                </span>
              </Link>
              <DeleteLink userId={page.userId} id={page.id} />
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
