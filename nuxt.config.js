import nodeExternals from 'webpack-node-externals'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr'
    },
    title: brand.agency.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.agency.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
      // { name: 'msapplication-TileImage', content: '/static/images/new/logo2.jpg' },
      // PWA primary color
      { name: 'theme-color', content: theme.primary},
      // Facebook
      { property: 'author', content: 'luxi' },
      { property: 'og:site_name', content: 'luxi.ux-maestro.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:domain', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:creator', content: 'luxi' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:url', content: brand.agency.url },
      { property: 'og:title', content: brand.agency.projectName },
      { property: 'og:description', content: brand.agency.desc },
      { name: 'twitter:site', content: brand.agency.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.agency.img },
      { property: 'og:image', content: brand.agency.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/images/new/logo2.jpg' },
      // Fonts and Icons
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-wow-config',
    '~/plugins/vue-fragment-config',
    { src: '~/plugins/vue-lightbox-config', ssr: false},
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    ['nuxt-gmaps', { key: '' }],
    [
      'nuxt-i18n',
      {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: true,
        baseUrl: 'https://anetquick.superqrmenu.co.ke/',
        lazy: true,
        locales: languages,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
        },
        langDir: 'static/lang/'
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },
  /*
  ** Render configuration
  */
  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        },
        scroll: function (el, binding) {
          let f = function (evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-webpack-plugin",
          exclude: /([node_modules, static])/,
          options: {
            fix: false
          }
        });
      }
    }
  },
  /*
  ** Page Layout transition
  */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Application Port
  */
  server: {
    port: 8001, // default: 3000
  }
}
