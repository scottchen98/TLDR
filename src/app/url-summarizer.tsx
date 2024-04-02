import { fetchPageContent, isValidUrl } from "./helpers";
import SummarizeDocument from "./summarize-document";

export default async function UrlSummarizer({
  query,
}: {
  query: string | undefined;
}) {
  let htmlString: { error: string } | string = "";
  if (query && isValidUrl(query)) {
    htmlString = await fetchPageContent(`${query}`);
  }

  if (typeof htmlString === "object" && "error" in htmlString)
    return <p className="text-center text-red-500">{htmlString.error}</p>;

  return (
    <div className="space-y-10">
      {htmlString && query && (
        <SummarizeDocument htmlString={htmlString} url={query} />
      )}
    </div>
  );
}
