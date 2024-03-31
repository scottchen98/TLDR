import { Link as LinkUrl } from "lucide-react";

import Link from "next/link";

import { getCurrentUserWebpages } from "@/db/queries/webpages";
import DeleteLink from "./delete-link";

export default async function NavBar() {
  const pages = await getCurrentUserWebpages.all({ userId: "1" });

  return (
    <nav className="mt-4 grid items-start px-2 text-sm font-medium lg:px-4">
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
