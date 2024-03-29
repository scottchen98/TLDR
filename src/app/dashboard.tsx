import Link from "next/link";
import { CircleUser, Link as LinkUrl, Menu, ScrollText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Dashboard() {
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
              <Link
                href="#"
                className="flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <LinkUrl className="h-4 w-4" />
                https://sst.dev
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <LinkUrl className="h-4 w-4" />
                https://sst.dev
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
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                >
                  <LinkUrl className="h-4 w-4" />
                  https://sst.dev
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-full px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                >
                  <LinkUrl className="h-4 w-4" />
                  https://sst.dev
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                Past a URL for a quick summary.
              </h3>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <LinkUrl className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Enter a URL here..."
                      className="w-full appearance-none bg-background pl-8 shadow-none"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
