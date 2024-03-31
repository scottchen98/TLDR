import { notFound } from "next/navigation";
import { getWebpage } from "@/db/queries/webpages";
import Link from "next/link";

export default async function LinkPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const page = (await getWebpage.all({ userId: "1", id: parseInt(id) })).at(0);
  if (!page) notFound();

  return (
    <div className="px-8 py-8">
      <Link
        href={page.url}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {page.url}
      </Link>
      <h1 className="mt-8 text-2xl font-bold">{page.title}</h1>
      <p className="mt-3 text-pretty">{page.summary}</p>
    </div>
  );
}
