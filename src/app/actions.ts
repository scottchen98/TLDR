"use server";

import {
  createWebpage as createWebpageDb,
  deleteWebpage as deleteWebpageDb,
  getCurrentUserWebpages as getCurrentUserWebpagesDb,
  webpageExists as webpageExistsDb,
} from "@/db/queries/webpages";
import { revalidatePath } from "next/cache";

export const getCurrentUserWebpages = async (userId: string) => {
  revalidatePath("/summary");
  return await getCurrentUserWebpagesDb.all({ userId });
};

export const webpageExists = async (userId: string, url: string) => {
  const webpage = await webpageExistsDb
    .all({ userId, url })
    .then((res) => res[0]);
  return webpage ? true : false;
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
  const newWebpage = await createWebpageDb
    .all({ userId, url, title, summary })
    .then((res) => res[0]);
  if (!newWebpage) return { error: "Failed to create web page." };
  revalidatePath(`/summary/${newWebpage.id}`);
  revalidatePath("/");
  return newWebpage;
};

export const deleteWebpage = async (userId: string, id: number) => {
  await deleteWebpageDb.all({ userId, id });
  revalidatePath(`/summary/${id}`);
  revalidatePath("/summary");
  revalidatePath("/");
};
