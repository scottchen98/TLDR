import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "..";
import { webpages } from "../schema/webpages";

export const baseQuery = db.select().from(webpages);

export const getCurrentUserWebpages = baseQuery
  .where(eq(webpages.userId, sql.placeholder("userId")))
  .orderBy(desc(webpages.createdAt))
  .prepare();

export const getWebpage = baseQuery
  .where(
    and(
      eq(webpages.userId, sql.placeholder("userId")),
      eq(webpages.id, sql.placeholder("id")),
    ),
  )
  .prepare();

export const createWebpage = db
  .insert(webpages)
  .values({
    userId: sql.placeholder("userId"),
    url: sql.placeholder("url"),
    title: sql.placeholder("title"),
    summary: sql.placeholder("summary"),
  })
  .returning()
  .prepare();

export const deleteWebpage = db
  .delete(webpages)
  .where(
    and(
      eq(webpages.userId, sql.placeholder("userId")),
      eq(webpages.id, sql.placeholder("id")),
    ),
  )
  .prepare();

export const webpageExists = baseQuery
  .where(
    and(
      eq(webpages.userId, sql.placeholder("userId")),
      eq(webpages.url, sql.placeholder("url")),
    ),
  )
  .prepare();

export type Webpages = Awaited<ReturnType<typeof baseQuery.all>>[0];
