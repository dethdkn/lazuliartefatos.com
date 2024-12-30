export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxt/icon'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  site: {
    url: 'https://lazuliartefatos.com/',
    name: 'Lazuli Artefatos',
    description: 'Lojinha de arte.fatos - ecobags feitas à mão sob encomenda e LP\'s dos clássicos aos mais raros. desvenda...',
  },
  compatibilityDate: '2024-12-28',
  linkChecker: { enabled: false },
})
