import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { notFound, redirect } from "next/navigation";
import { getWebpage } from "@/db/queries/webpages";
import WebpageSummary from "./webpage-summary";

export default async function LinkPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) return redirect("/");

  const { id } = params;
  const page = (await getWebpage.all({ userId: "1", id: parseInt(id) })).at(0);
  if (!page) notFound();

  const { from_summarizer: fromSummarizer } = searchParams;
  return (
    <>
      <WebpageSummary
        url={page.url}
        title={page.title}
        summary={page.summary}
        fromSummarizer={fromSummarizer}
      />
    </>
  );
}
