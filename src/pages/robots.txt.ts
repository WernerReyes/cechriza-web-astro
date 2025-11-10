import type { APIRoute } from "astro";
import { URL_SITE } from "astro:env/server";

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = () => {
  const sitemapURL = new URL("sitemap-index.xml", URL_SITE);
  return new Response(getRobotsTxt(sitemapURL));
};
