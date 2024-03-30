import { fetchPageContent, isValidUrl } from "./helpers";
import ParseDocument from "./parse-document";

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
      {htmlString && <ParseDocument htmlString={htmlString} />}
    </div>
  );
}
