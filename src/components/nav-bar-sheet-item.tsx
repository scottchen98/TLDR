"use client";

import { Link as LinkUrl } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DeleteLink from "./delete-link";

type Webpage = {
  id: number;
  userId: string;
  url: string;
  title: string;
  summary: string;
  createdAt: string;
};
export default function NavBarSheetItem({ webpage }: { webpage: Webpage }) {
  const pathname = usePathname();
  const isActive = pathname === `/summary/${webpage.id}`;

  return (
    <TooltipProvider key={webpage.id}>
      <Tooltip>
        <TooltipTrigger className="w-full">
          <Link href={`/summary/${webpage.id}`}>
            <div
              className={`group relative rounded-full py-2 pl-3 pr-10 transition-all ${isActive ? "hover:[#d4e0ed] bg-[#d4e0ed] text-primary" : "text-muted-foreground hover:bg-muted hover:text-primary"}`}
            >
              <div className="flex items-center gap-3">
                <span>
                  <LinkUrl className="h-4 w-4" />
                </span>
                <span className="line-clamp-1 overflow-hidden text-ellipsis">
                  {webpage.url}
                </span>
              </div>
              <DeleteLink
                userId={webpage.userId}
                id={webpage.id}
                url={webpage.url}
                isActive={isActive}
              />
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="relative left-24 top-[10px] max-w-[350px] sm:left-40">
          {webpage.title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
