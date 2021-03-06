/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
 import Vuetify from 'vuetify'
 import 'vuetify/dist/vuetify.css'
 import '@mdi/font/css/materialdesignicons.css'
 
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    }
  })
  // ...apply enhancements for the site.
}
