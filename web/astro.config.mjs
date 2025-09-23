
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

const isProd = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://trustedcrypto.com',
  vite: { plugins: [tailwindcss()] },
  integrations: [ ...(isProd ? [sitemap()] : []) ],
  output: 'server',
  adapter: vercel(),
})
