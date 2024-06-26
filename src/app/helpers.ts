import { Readability } from "@mozilla/readability";

export async function fetchPageContent(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    return { error: "Sorry, the URL doesn't exist." };
  }

  const htmlString = await response.text();
  return htmlString;
}

export function extractArticleInformation(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const article = new Readability(doc).parse();
  return article;
}

export function isValidUrl(urlString: string) {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
}

export async function summarizeText(text: string) {
  const res = await fetch("/api/summarization", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if ("error" in data) return { error: data.error };
  return data.summarizedText;
}
