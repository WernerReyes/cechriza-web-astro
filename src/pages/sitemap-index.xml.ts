import { getPages } from "@/services/page.service";
import type { APIRoute } from "astro";
import { URL_SITE } from "astro:env/server";

export const GET: APIRoute = async () => {
  const pages = await getPages();

  console.log({ pages });

  const urls = pages
    .map(
      (page) => `
        <url>
          <loc>${URL_SITE}/${page.slug}</loc>
          <lastmod>${page.updated_at}</lastmod>
        </url>
      `
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
