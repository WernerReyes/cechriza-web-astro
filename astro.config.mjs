import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 genera SSR
  // adapter: node({ mode: 'standalone' }),
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


      MAILER_SERVICE: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAILER_EMAIL: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAILER_SECRET_KEY: envField.string({
        context: 'server',
        access: 'secret'
      }),
    }
  },
});