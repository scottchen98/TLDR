import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";
import UrlSummarizer from "../url-summarizer";

export default async function SummaryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) return redirect("/");

  const { query } = searchParams;

  return (
    <>
      <UrlSummarizer query={query} />
    </>
  );
}
