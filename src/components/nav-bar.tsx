import { Link as LinkUrl } from "lucide-react";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import DeleteLink from "./delete-link";
import { getCurrentUserWebpages } from "@/app/actions";

export default async function NavBar() {
  const pages = await getCurrentUserWebpages("1");

  return (
    <nav className="grid items-start px-2 text-sm font-medium md:mt-5 lg:mt-1 lg:px-4">
      {pages.map((page) => (
        <TooltipProvider key={page.id}>
          <Tooltip>
            <TooltipTrigger className="min-w-full">
              <Link href={`/summary/${page.id}`}>
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
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-md">
              {page.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </nav>
  );
}
