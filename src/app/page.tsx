import UrlSummarizer from "./url-summarizer";

export default function HomePage({
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
