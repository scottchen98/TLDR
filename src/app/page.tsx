import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Hero from "./hero";

export default async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (isAuth) return redirect("/summary");

  return (
    <Hero>
      <LoginLink postLoginRedirectURL="/summary">
        <Button
          variant="outline"
          className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm"
        >
          Sign in
        </Button>
      </LoginLink>

      <RegisterLink postLoginRedirectURL="/summary">
        <Button className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm">
          Sign up
        </Button>
      </RegisterLink>
    </Hero>
  );
}
