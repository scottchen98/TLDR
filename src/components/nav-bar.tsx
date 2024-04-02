import { Plus, Link as LinkUrl } from "lucide-react";

import Link from "next/link";

import DeleteLink from "./delete-link";
import { Button } from "./ui/button";
import { getCurrentUserWebpages } from "@/app/actions";

export default async function NavBar() {
  const pages = await getCurrentUserWebpages("1");

  return (
    <nav className="grid items-start px-2 text-sm font-medium md:mt-9 lg:mt-8 lg:px-4">
      <Link href="/summary" className="mb-6 h-10 w-[60%] rounded-full">
        <Button className="w-full space-x-1 rounded-full bg-[#eeeeee] pr-[22px] text-xs text-[#b0b0b0] hover:cursor-pointer hover:bg-[#eeeeee] lg:space-x-2 lg:text-sm">
          <span>
            <Plus className="h-4 w-4 lg:h-5 lg:w-5" />
          </span>
          <span>New summary</span>
        </Button>
      </Link>
      {pages.map((page) => (
        <Link key={page.id} href={`/summary/${page.id}`} className="min-w-full">
          <div className="group relative rounded-full py-2 pl-3 pr-10 text-muted-foreground transition-all hover:bg-muted hover:text-primary">
            <div className="flex items-center gap-3">
              <span>
                <LinkUrl className="h-4 w-4" />
              </span>
              <span className="line-clamp-1 overflow-hidden text-ellipsis">
                {page.url}
              </span>
            </div>
            <DeleteLink userId={page.userId} id={page.id} url={page.url} />
          </div>
        </Link>
      ))}
    </nav>
  );
}
