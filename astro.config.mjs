// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for Cloudflare Pages — no Worker bindings needed.
// Switch to SSR + Cloudflare adapter in Stage 7 when Coven auth is added.
export default defineConfig({
  output: 'static',
  site: 'https://whiteowlhub.com',
  integrations: [sitemap()],
});
