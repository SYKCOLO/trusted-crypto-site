// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  // TEMP: we'll set this to your real domain after deploy
  site: 'https://trusted-crypto-site.vercel.app',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
})
