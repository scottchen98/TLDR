import UrlSummarizer from "./url-summarizer";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { query } = searchParams;

  return (
    <>
      <UrlSummarizer query={query} />
    </>
  );
}
