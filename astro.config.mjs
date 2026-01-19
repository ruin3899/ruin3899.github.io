import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 自分のGitHub PagesのURL
  site: 'https://ruin3899.github.io',

  integrations: [sitemap()],
});