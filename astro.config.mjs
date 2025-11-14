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


      MAIL_MAILER: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_USERNAME: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_PASSWORD: envField.string({
        context: 'server',
        access: 'secret'
      }),

      MAIL_HOST: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_PORT: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_ENCRYPTION: envField.string({
        context: 'server',
        access: 'secret'
      }),
    }
  },
});