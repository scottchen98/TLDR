import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import Hero from "./hero";

export default function HomePage() {
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
