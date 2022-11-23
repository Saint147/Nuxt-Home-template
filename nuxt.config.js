const pkg = require('./package')

module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'StyleSheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300:700'},
      { rel:"stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css"},
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      {rel:"stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    //'@nuxtjs/pwa',
    //'@nuxtjs/auth',
    '@nuxtjs/auth'
  ],
  xios: {
    baseURL: '/Nuxt-Home-Template', // Used as fallback if no runtime config is provided
  },



  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  server: {
    port: 8000
  },
  auth: {
    local: {
      endpoints: {
        login: { url: '/sessions', method: 'post', propertyName: 'token'},
        logout: { url: '/sessions', method: 'delete'},
        user: { url: '/sessions/user', method: 'get', propertyName: 'data.attributes'}
      },
      tokenType: ''
    }
  }
  
}
