// nuxt.config.ts
const baseURL = process.env.NUXT_APP_BASE_URL || '/';
const prerenderRoutes = ['', 'contact', 'services', 'work'].map((p) => baseURL + p);

export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Studio Northa — Web Design & Development | North East UK',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Studio Northa is a North East UK web design and brand studio. Modern websites, identities, and social systems for ambitious teams. Based in Newcastle upon Tyne, working everywhere.' },
        { name: 'keywords', content: 'web design north east, web development north east uk, brand studio newcastle, casino web design, sportsbook design, ui design north east, studio northa' },
        { name: 'author', content: 'Studio Northa' },
        { name: 'theme-color', content: '#080810' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Studio Northa' },
        { property: 'og:title', content: 'Studio Northa — Web Design & Development | North East UK' },
        { property: 'og:description', content: 'North East UK brand and web design studio. Modern websites, identities, and social — built in-house.' },
        { property: 'og:url', content: 'https://studio-northa.co.uk/' },
        { property: 'og:locale', content: 'en_GB' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Studio Northa — Web Design & Development | North East UK' },
        { name: 'twitter:description', content: 'North East UK brand and web design studio.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://studio-northa.co.uk/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Studio Northa',
            alternateName: 'Northa',
            url: 'https://studio-northa.co.uk',
            logo: 'https://studio-northa.co.uk/favicon.svg',
            description: 'North East UK web design and brand studio. Modern websites, identities, and social systems for ambitious teams.',
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Newcastle upon Tyne',
              addressRegion: 'Tyne and Wear',
              addressCountry: 'GB',
            },
            email: 'hello@studio-northa.co.uk',
            telephone: '+44 7961 011032',
            knowsAbout: ['Web Design', 'Web Development', 'Brand Identity', 'UI Design', 'Casino Web Design', 'Social Media Strategy'],
          }),
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: prerenderRoutes,
    },
  },
  css: ['~/assets/main.css'],
});
