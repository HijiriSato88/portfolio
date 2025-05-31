// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    '~/assets/css/tailwind.scss',
    '~/assets/css/styles.scss'
  ],
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
