// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Studio Northa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Three-person digital brand studio operating from the North East, UK. Web, identity, and social — done in-house.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },
  css: ['~/assets/main.css'],
});
