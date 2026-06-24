import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isGhPagesBuild = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  // In CI puntiamo all'URL reale di GitHub Pages (sotto-percorso /gavioli.net/);
  // in locale e in produzione (dominio custom) usiamo gavioli.net senza base.
  site: isGhPagesBuild ? 'https://paologavioli.github.io' : 'https://gavioli.net',
  base: isGhPagesBuild ? '/gavioli.net/' : '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
