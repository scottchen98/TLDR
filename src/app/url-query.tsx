import { Link as LinkUrl } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function UrlQuery() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-1 items-start justify-center">
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
    </div>
  );
}
