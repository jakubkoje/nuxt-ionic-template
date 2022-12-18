// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/ionic.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/ionic'],
  ionic: {
    config: {
      mode: 'ios'
    }
  }
})
