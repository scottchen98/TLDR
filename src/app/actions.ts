"use server";

import {
  createWebpage,
  deleteWebpage,
  getCurrentUserWebpages as getCurrentUserWebpagesDb,
} from "@/db/queries/webpages";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getCurrentUserWebpages = async (userId: string) => {
  revalidatePath("/summary");
  return await getCurrentUserWebpagesDb.all({ userId });
};

export const handleCreate = async ({
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
  const newPage = (await createWebpage.all({ userId, url, title, summary })).at(
    0,
  );
  revalidatePath(`/summary/${newPage?.id}`);
  revalidatePath("/summary");
  return newPage;
};

export const handleDelete = async (userId: string, id: number) => {
  await deleteWebpage.all({ userId, id });
  revalidatePath(`/summary/${id}`);
  revalidatePath("/summary");
  redirect("/summary");
};
