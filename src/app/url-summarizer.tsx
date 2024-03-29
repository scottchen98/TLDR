import { fetchPageContent } from "./helpers";
import ParseDocument from "./parse-document";

export default async function UrlSummarizer() {
  const htmlString = await fetchPageContent(
    "https://sst.dev/chapters/review-our-app-architecture.html"
  );

  return (
    <>
      <ParseDocument htmlString={htmlString} />
    </>
  );
}
