export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      atlasURI: 'https://api.boardgameatlas.com/api/search',
    },
    atlasClientId: 'Client Id',
    atlasClientSecret: 'Client Secret',
  },
})
