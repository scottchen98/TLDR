import UrlSummarizer from "../url-summarizer";

export default function SummaryPage({
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
