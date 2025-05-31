// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image", "@vueuse/motion/nuxt"],
  css: [
    '~/assets/css/tailwind.scss',
    '~/assets/css/styles.scss'
  ],
  googleFonts: {
    families: {
      Manrope: [200, 300, 400, 500, 600, 700, 800]
    },
    display: 'swap'
  },
  image: {
    // 画像最適化の設定
    quality: 90,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  }
})
