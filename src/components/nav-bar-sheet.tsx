import {
  Menu,
  Link as LinkUrl,
  ScrollText,
  EllipsisVertical,
  Trash2,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

export default function NavBarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/"
            className="mb-5 flex items-center gap-2 text-lg font-semibold"
          >
            <ScrollText className="h-6 w-6" />
            TLDR
            <span className="sr-only">TLDR</span>
          </Link>
          <Link href="#" className="min-w-full">
            <p className="group flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary">
              <span>
                <LinkUrl className="h-4 w-4" />
              </span>
              <span className="line-clamp-1">
                https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
              </span>
              <Popover>
                <PopoverTrigger className="invisible ml-auto rounded-full p-1 hover:bg-[#e1e4e8] group-hover:visible">
                  <EllipsisVertical className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="relative bottom-10 left-[77%] flex w-fit items-center gap-2 py-3 shadow-lg">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </PopoverContent>
              </Popover>
            </p>
          </Link>
          <Link href="#" className="min-w-full">
            <p className="group flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary">
              <span>
                <LinkUrl className="h-4 w-4" />
              </span>
              <span className="line-clamp-1">
                https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
              </span>
              <Popover>
                <PopoverTrigger className="invisible ml-auto rounded-full p-1 hover:bg-[#e1e4e8] group-hover:visible">
                  <EllipsisVertical className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="relative bottom-10 left-[77%] flex w-fit items-center gap-2 py-3 shadow-lg">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </PopoverContent>
              </Popover>
            </p>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
