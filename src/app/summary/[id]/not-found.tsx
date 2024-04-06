import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto mt-8 flex flex-col items-center gap-4 text-muted-foreground">
      <Frown className="h-16 w-16" />
      <h2 className="text-2xl font-medium">Summary Not Found</h2>
    </div>
  );
}
