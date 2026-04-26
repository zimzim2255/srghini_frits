import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://serghini-frites.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});