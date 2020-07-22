require('dotenv').config()
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Lokabees Dealer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Shopverwaltung',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Environment variables at runtime
   ** https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
   */
  publicRuntimeConfig: {},
  privateRuntimeConfig: {
    appMasterKey: process.env.VUE_APP_MASTER_KEY,
  },
  /*
   ** Environment variables at build
   */
  env: {
    VUE_APP_MASTER_KEY: process.env.VUE_APP_MASTER_KEY,
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/modules/i18n',
    '~/plugins/modules/vue-formulate',
    '~/plugins/services/error-handler',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/Developmint/nuxt-webfontloader#readme
    'nuxt-webfontloader',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],

  /*
   ** Webfontloader
   ** See https://www.npmjs.com/package/webfontloader
   */
  webfontloader: {
    custom: {
      families: ['Montserrat:n4,n6,n7', ' :n4,n7'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
      ],
    },
  },
  /*
   ** Pwa module configuration
   ** See https://pwa.nuxtjs.org/modules/workbox.html#config
   */
  pwa: {
    workbox: {
      clientsClaim: false,
    },
  },
  /**
   ** nuxt/auth configuration
   ** See https://auth.nuxtjs.org/
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: {
            url: '/api/users/me',
            method: 'get',
            propertyName: '',
          },
        },
      },
      facebook: {
        client_id: process.env.VUE_APP_FACEBOOK_ID,
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri: 'http://localhost:3000/callback',
      },
      google: {
        client_id: process.env.VUE_APP_GOOGLE_ID,
        user: false,
        redirect_uri: 'http://localhost:3000/callback',
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },

  proxy: {
    '/api': { target: 'http://localhost:9000' },
  },
  /**
   ** router configuration
   */
  router: {
    middleware: ['auth'],
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /**
   ** PurgeCSS configuration
   */
  purgeCSS: {
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^nuxt-link(|-exact)-active$/,
    ],
  },
  /*
   ** Tailtind configuration
   ** See https://github.com/nuxt-community/tailwindcss-module
   */
  tailwindcss: {
    // purgeCSSInDev: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
