export const runtime = "edge";

export async function POST(request: Request) {
  const { text } = await request.json();

  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({ inputs: text }),
    },
  );
  const result: { summary_text: string }[] = await response.json();
  if (!result || !result[0])
    return new Response(
      JSON.stringify({ error: "Failed to summarize text. Please try again." }),
      {
        headers: { "content-type": "application/json" },
        status: 500,
      },
    );

  const { summary_text } = result[0];
  return new Response(
    JSON.stringify({ summarizedText: summary_text.replaceAll(" .", ".") }),
    {
      headers: { "content-type": "application/json" },
    },
  );
}
