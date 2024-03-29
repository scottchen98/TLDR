export async function fetchPageContent(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const htmlString = await response.text();
  return htmlString;
}
