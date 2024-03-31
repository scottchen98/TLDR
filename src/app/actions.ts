"use server";

import { deleteWebpage } from "@/db/queries/webpages";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleDelete = async (userId: string, id: number) => {
  await deleteWebpage.all({ userId, id });
  revalidatePath("/summary");
  redirect("/summary");
};
