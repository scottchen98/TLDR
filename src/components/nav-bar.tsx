import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { getCurrentUserWebpages } from "@/app/actions";
import NavBarItem from "./nav-bar-item";

export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const sessionUser = await getUser();
  if (!sessionUser) return;

  const pages = await getCurrentUserWebpages(sessionUser.id);

  return (
    <nav className="grid items-start px-2 text-sm font-medium md:mt-5 lg:mt-1 lg:px-4">
      {pages.map((page) => (
        <NavBarItem key={page.id} webpage={page} />
      ))}
    </nav>
  );
}
