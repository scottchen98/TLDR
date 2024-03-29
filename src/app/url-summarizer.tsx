import { fetchPageContent, isValidUrl } from "./helpers";
import ParseDocument from "./parse-document";
import UrlQuery from "./url-query";

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
      <UrlQuery />
      {query && !isValidUrl(query) && (
        <p className="text-red-500 text-center">
          Invalid URL. Please try again.
        </p>
      )}
      {htmlString && <ParseDocument htmlString={htmlString} />}
    </div>
  );
}
