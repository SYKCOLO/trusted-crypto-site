// astro.config.mjs (or .ts)
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'     // ⬅️ updated (was @astrojs/vercel/serverless)

export default defineConfig({
  site: 'https://trustedcrypto.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
})
