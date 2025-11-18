import { PUBLIC_API } from "astro:env/server";
import type { ApiResponse } from "../interfaces/api-response";
import type { Page } from "../interfaces/page.interface";

export async function getPages(): Promise<Page[]> {
  const res = await fetch(`${PUBLIC_API}/page`, {
    credentials: "include",
  });

  const data = (await res.json()) as ApiResponse<Page[]>;

  if (!data.success) {
    return [];
  }
  return data.data;
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const res = await fetch(`${PUBLIC_API}/page/${slug}`, {
      credentials: "include",
    }).catch((error) => {
      throw error;
    });

    const data = (await res.json()) as ApiResponse<Page>;

    if (!data.success) {
      return null;
    }

    return data.data;
  } catch (error) {
    return null;
  }
}
