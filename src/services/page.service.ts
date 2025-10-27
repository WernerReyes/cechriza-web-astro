
import { PUBLIC_API } from "astro:env/server";
import type { ApiResponse } from "../interfaces/api-response";
import type { Page } from "../interfaces/page.interface";

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
  const res = await fetch(`${PUBLIC_API}/page/${slug}`, {
    credentials: "include",
  });
  const data = (await res.json()) as ApiResponse<Page>;

  // console.log({ data })

  if (!data.success) {
    return null;
  }


  return data.data;
} catch (error) {
  console.error("Error fetching page by slug:", error);
  return null;
}
}
