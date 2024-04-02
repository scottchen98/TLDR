import { fetchPageContent, isValidUrl } from "./helpers";
import SummarizeDocument from "./summarize-document";

export default async function UrlSummarizer({
  query,
}: {
  query: string | undefined;
}) {
  let htmlString;
  if (query && isValidUrl(query)) {
    htmlString = await fetchPageContent(`${query}`);
  }

  return (
    <div className="space-y-10">
      {htmlString && query && (
        <SummarizeDocument htmlString={htmlString} url={query} />
      )}
    </div>
  );
}
