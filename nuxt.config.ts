export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  css: [
    '~/assets/css/styles.scss'
  ],
  googleFonts: {
    families: {
      Anton: [400],
      'IBM Plex Mono': [300, 400, 500],
      'Shippori Mincho': [500, 700],
      'Zen Kaku Gothic New': [400, 500, 700],
    },
    display: 'swap'
  },
  image: {
    quality: 90,
    format: ['webp']
  },
})
