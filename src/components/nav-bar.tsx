import { Plus, Link as LinkUrl } from "lucide-react";

import Link from "next/link";

import { getCurrentUserWebpages } from "@/db/queries/webpages";
import DeleteLink from "./delete-link";
import { Button } from "./ui/button";

export default async function NavBar() {
  const pages = await getCurrentUserWebpages.all({ userId: "1" });

  return (
    <nav className="mt-4 grid items-start px-2 text-sm font-medium lg:px-4">
      <Link href="/summary" className="mb-6 h-10 w-[60%] rounded-full">
        <Button className="w-full space-x-1 rounded-full bg-[#eeeeee] pr-[22px] text-xs text-[#b0b0b0] hover:cursor-pointer hover:bg-[#eeeeee] lg:space-x-2 lg:text-sm">
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
  );
}
