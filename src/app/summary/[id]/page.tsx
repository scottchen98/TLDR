import { notFound } from "next/navigation";
import { getWebpage } from "@/db/queries/webpages";
import WebpageSummary from "./webpage-summary";

export default async function LinkPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const page = (await getWebpage.all({ userId: "1", id: parseInt(id) })).at(0);
  if (!page) notFound();

  return (
    <WebpageSummary url={page.url} title={page.title} summary={page.summary} />
  );
}
