
import { PUBLIC_API } from "astro:env/server";
import type { ApiResponse } from "../interfaces/api-response";
import type { Page } from "../interfaces/page.interface";

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const res = await fetch(`${PUBLIC_API}/page/${slug}`);

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as ApiResponse<Page>;

  return data.data;
}
