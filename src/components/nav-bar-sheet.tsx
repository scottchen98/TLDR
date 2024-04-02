import { Menu, Link as LinkUrl, ScrollText, Plus } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { getCurrentUserWebpages } from "@/db/queries/webpages";
import DeleteLink from "./delete-link";

export default async function NavBarSheet() {
  const pages = await getCurrentUserWebpages.all({ userId: "1" });

  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        {/* <nav className="grid gap-1 text-lg font-medium">
          <Link
            href="/"
            className="mb-5 flex items-center gap-2 text-lg font-semibold"
          >
            <ScrollText className="h-6 w-6" />
            TLDR
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
          <div className="min-w-full overflow-auto">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`/summary/${page.id}`}
                className="min-w-full"
              >
                <div className="group relative rounded-full py-2 pl-3 pr-10 text-muted-foreground transition-all hover:bg-muted hover:text-primary">
                  <div className="flex items-center gap-3">
                    <span>
                      <LinkUrl className="h-4 w-4" />
                    </span>
                    <span className="line-clamp-1 overflow-hidden text-ellipsis">
                      {page.url}
                    </span>
                  </div>
                  <DeleteLink
                    userId={page.userId}
                    id={page.id}
                    url={page.url}
                  />
                </div>
              </Link>
            ))}
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
            <p>HELLO WORLD</p>
          </div>
        </nav>
        <Link href="" className="m-auto mb-2 w-full">
          <Button className="w-full">Logout</Button>
        </Link> */}
        <div className="flex h-full max-h-dvh flex-col gap-2 pt-2">
          <div className="mt-2 flex h-28 flex-col justify-center gap-8">
            <Link
              href="/"
              className="mb-0 flex items-center gap-2 text-lg font-semibold"
            >
              <ScrollText className="h-6 w-6" />
              TLDR
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
              <div className="min-w-full overflow-auto">
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    href={`/summary/${page.id}`}
                    className="min-w-full"
                  >
                    <div className="group relative rounded-full py-2 pl-3 pr-10 text-muted-foreground transition-all hover:bg-muted hover:text-primary">
                      <div className="flex items-center gap-3">
                        <span>
                          <LinkUrl className="h-4 w-4" />
                        </span>
                        <span className="line-clamp-1 overflow-hidden text-ellipsis">
                          {page.url}
                        </span>
                      </div>
                      <DeleteLink
                        userId={page.userId}
                        id={page.id}
                        url={page.url}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <Link href="" className="m-auto mb-2 w-full">
            <Button className="w-full">Logout</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
