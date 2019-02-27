export default {
  modules: [
    '@nuxtjs/vuetify'
  ],
  css: [
    '@/assets/css/style.css',
  ],
  mode: 'spa',
  build: {
    publicPath: 'https://bancha-project.github.io/bancha-convertor2/',
  },
  router: {
    base: '/bancha-convertor2/'
  },
}
