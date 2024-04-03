"use server";

import {
  createWebpage as createWebpageDb,
  deleteWebpage as deleteWebpageDb,
  getCurrentUserWebpages as getCurrentUserWebpagesDb,
  webpageExists,
} from "@/db/queries/webpages";
import { revalidatePath } from "next/cache";

export const getCurrentUserWebpages = async (userId: string) => {
  revalidatePath("/summary");
  return await getCurrentUserWebpagesDb.all({ userId });
};

export const createWebpage = async ({
  userId,
  url,
  title,
  summary,
}: {
  userId: string;
  url: string;
  title: string;
  summary: string;
}) => {
  const newPage = await createWebpageDb
    .all({ userId, url, title, summary })
    .then((res) => res[0]);
  if (!newPage) return null;
  return newPage;
};

export const deleteWebpage = async (userId: string, id: number) => {
  await deleteWebpageDb.all({ userId, id });
  revalidatePath(`/summary/${id}`);
  revalidatePath("/summary");
  revalidatePath("/");
};

export const summarizeText = async (data: { inputs: string }) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  const result: { summary_text: string }[] = await response.json();
  if (!result || !result[0]) return "";
  const { summary_text } = result[0];
  return summary_text.replaceAll(" .", ".");
};

export const summarizeTextAndCreateWebpage = async (
  text: string,
  userId: string,
  url: string,
  title: string,
) => {
  const webpage = await webpageExists
    .all({ userId, url })
    .then((res) => res[0]);
  if (webpage) return { error: "URL has already been summarized." };

  const textSummary = await summarizeText({ inputs: text });
  if (!textSummary)
    return { error: "Failed to summarize text. Please try again." };

  const newWebpage = await createWebpage({
    userId,
    url,
    title,
    summary: textSummary,
  });
  if (!newWebpage) return { error: "Failed to create web page." };
  revalidatePath(`/summary/${newWebpage.id}`);
  revalidatePath("/");
  return newWebpage;
};
