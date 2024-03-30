import Link from "next/link";
import {
  CircleUser,
  Link as LinkUrl,
  EllipsisVertical,
  Menu,
  ScrollText,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
            <nav className="grid mt-4 items-start px-2 text-sm font-medium lg:px-4">
              <Link href="#" className="min-w-full">
                <p className="flex items-center group gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                  <span>
                    <LinkUrl className="h-4 w-4" />
                  </span>
                  <span className="line-clamp-1">
                    https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
                  </span>
                  <Popover>
                    <PopoverTrigger className="ml-auto invisible group-hover:visible p-1 rounded-full hover:bg-[#e1e4e8]">
                      <EllipsisVertical className="h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit py-3 hidden md:flex md:items-center md:gap-2 md:relative lg:left-[88%] md:left-[80%] md:bottom-10 shadow-lg">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </PopoverContent>
                  </Popover>
                </p>
              </Link>
              <Link href="#" className="min-w-full">
                <p className="flex items-center group gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                  <span>
                    <LinkUrl className="h-4 w-4" />
                  </span>
                  <span className="line-clamp-1">
                    https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
                  </span>
                  <Popover>
                    <PopoverTrigger className="ml-auto invisible group-hover:visible p-1 rounded-full hover:bg-[#e1e4e8]">
                      <EllipsisVertical className="h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit py-3 hidden md:flex md:items-center md:gap-2 md:relative lg:left-[88%] md:left-[80%] md:bottom-10 shadow-lg">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </PopoverContent>
                  </Popover>
                </p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-5"
                >
                  <ScrollText className="h-6 w-6" />
                  TLDR
                  <span className="sr-only">TLDR</span>
                </Link>
                <Link href="#" className="min-w-full">
                  <p className="flex items-center group gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                    <span>
                      <LinkUrl className="h-4 w-4" />
                    </span>
                    <span className="line-clamp-1">
                      https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
                    </span>
                    <Popover>
                      <PopoverTrigger className="ml-auto invisible group-hover:visible p-1 rounded-full hover:bg-[#e1e4e8]">
                        <EllipsisVertical className="h-4 w-4" />
                      </PopoverTrigger>
                      <PopoverContent className="w-fit py-3 flex items-center gap-2 relative left-[77%] bottom-10 shadow-lg">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </PopoverContent>
                    </Popover>
                  </p>
                </Link>
                <Link href="#" className="min-w-full">
                  <p className="flex items-center group gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                    <span>
                      <LinkUrl className="h-4 w-4" />
                    </span>
                    <span className="line-clamp-1">
                      https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
                    </span>
                    <Popover>
                      <PopoverTrigger className="ml-auto invisible group-hover:visible p-1 rounded-full hover:bg-[#e1e4e8]">
                        <EllipsisVertical className="h-4 w-4" />
                      </PopoverTrigger>
                      <PopoverContent className="w-fit py-3 flex items-center gap-2 relative left-[77%] bottom-10 shadow-lg">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </PopoverContent>
                    </Popover>
                  </p>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="ml-auto">
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Update Profile Photo</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <UrlSummarizer query={query} />
      </div>
    </div>
  );
}
