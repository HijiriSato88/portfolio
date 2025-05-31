export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt"
  ],
  css: [
    '~/assets/css/styles.scss'
  ],
  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 600, 700, 800]
    },
    display: 'swap'
  },
  image: {
    quality: 90,
    format: ['webp']
  },
  build: {
    transpile: ['@iconify/vue']
  }
})
