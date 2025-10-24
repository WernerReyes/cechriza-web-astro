// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 genera SSR
  // adapter: node({ mode: 'standalone' }),
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