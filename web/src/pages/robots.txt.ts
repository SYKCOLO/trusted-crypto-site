import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Sitemap: https://trusted-crypto-site.vercel.app/sitemap-index.xml`; // update to your real domain after deploy
  return new Response(body);
};
