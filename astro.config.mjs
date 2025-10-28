// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from "@tailwindcss/vite";
// import node from '@astrojs/node';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 genera SSR
  // adapter: node({ mode: 'standalone' }),
  adapter: vercel({}),
  redirects: {
    '/': '/home',
  },
   integrations: [icon()],

  vite: {
    
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_API: envField.string({
        context: 'server',
        access: 'public'
      })
    }
  },
});