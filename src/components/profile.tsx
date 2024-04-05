import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Profile({ className }: { className?: string }) {
  return (
    <LogoutLink className={cn("mx-auto mb-8 w-[80%]", className)}>
      <Button className="w-full">Logout</Button>
    </LogoutLink>
  );
}
