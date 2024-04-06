import { Skeleton } from "@/components/ui/skeleton";

export function SummarySkeleton() {
  return (
    <div className="space-y-5 p-8">
      <Skeleton className="mb-10 h-4 w-[85%] bg-[#FFCEFE]" />
      <Skeleton className="h-8 w-1/3 bg-[#D9ACF5]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-[#FFCEFE]" />
        <Skeleton className="h-4 w-full bg-[#FFCEFE]" />
        <Skeleton className="h-4 w-[70%] bg-[#FFCEFE]" />
      </div>
    </div>
  );
}
