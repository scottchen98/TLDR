import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function Profile({ className }: { className?: string }) {
  const { getUser } = getKindeServerSession();
  const sessionUser = await getUser();

  return (
    <>
      {sessionUser && (
        <div className={cn("mx-auto mb-8 w-[80%]", className)}>
          <h2 className="mb-4 text-center text-xl font-medium">
            Hello, <span>{sessionUser.given_name}</span>!
          </h2>
          <LogoutLink>
            <Button className="w-full">Logout</Button>
          </LogoutLink>
        </div>
      )}
    </>
  );
}
