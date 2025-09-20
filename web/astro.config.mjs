// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://trusted-crypto-site.vercel.app', // set to your Vercel URL
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
})
