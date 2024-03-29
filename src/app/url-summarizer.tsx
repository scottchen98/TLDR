import { fetchPageContent } from "./helpers";
import ParseDocument from "./parse-document";
import UrlQuery from "./url-query";

export default async function UrlSummarizer() {
  const htmlString = await fetchPageContent(
    "https://sst.dev/chapters/review-our-app-architecture.html"
  );

  return (
    <div className="space-y-10">
      <UrlQuery />
      <ParseDocument htmlString={htmlString} />
    </div>
  );
}
