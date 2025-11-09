import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { URL_SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 genera SSR
  // adapter: node({ mode: 'standalone' }),
  site: URL_SITE,
  adapter: vercel({}),
  redirects: {
    '/': '/home',
  },
  integrations: [icon(), sitemap()],

  vite: {

    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_API: envField.string({
        context: 'server',
        access: 'public'
      }),
      URL_SITE: envField.string({
        context: 'server',
        access: 'public'
      }),
    }
  },
});