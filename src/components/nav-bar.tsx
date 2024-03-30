import { EllipsisVertical, Link as LinkUrl, Trash2 } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

export default function NavBar() {
  return (
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
  );
}
