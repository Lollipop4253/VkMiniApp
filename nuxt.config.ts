// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: 'https://github.com/Lollipop4253/VkMiniApp'
  },
  nitro: {
    preset: 'github-pages'
  }
})