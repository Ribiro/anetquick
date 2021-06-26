import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_pluginrouting_f5c19b34 from 'nuxt_plugin_pluginrouting_f5c19b34' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_1adf42c9 from 'nuxt_plugin_pluginmain_1adf42c9' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_plugin_198c9038 from 'nuxt_plugin_plugin_198c9038' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_nuxtgooglemaps_7f2d2312 from 'nuxt_plugin_nuxtgooglemaps_7f2d2312' // Source: ./nuxt-google-maps.js (mode: 'all')
import nuxt_plugin_nuxtmq_b86d9930 from 'nuxt_plugin_nuxtmq_b86d9930' // Source: ./nuxt-mq.js (mode: 'all')
import nuxt_plugin_vuewowconfig_32ee3066 from 'nuxt_plugin_vuewowconfig_32ee3066' // Source: ../plugins/vue-wow-config (mode: 'all')
import nuxt_plugin_vuefragmentconfig_12a6b83c from 'nuxt_plugin_vuefragmentconfig_12a6b83c' // Source: ../plugins/vue-fragment-config (mode: 'all')
import nuxt_plugin_vuelightboxconfig_28f6899d from 'nuxt_plugin_vuelightboxconfig_28f6899d' // Source: ../plugins/vue-lightbox-config (mode: 'client')
import nuxt_plugin_vueyoutubeconfig_52b5d649 from 'nuxt_plugin_vueyoutubeconfig_52b5d649' // Source: ../plugins/vue-youtube-config (mode: 'client')
import nuxt_plugin_i18nconfig_ad306bc6 from 'nuxt_plugin_i18nconfig_ad306bc6' // Source: ../plugins/i18n-config.js (mode: 'all')
import nuxt_plugin_carousselconfig_6e4e7344 from 'nuxt_plugin_carousselconfig_6e4e7344' // Source: ../plugins/caroussel-config (mode: 'client')
import nuxt_plugin_vuescrollnav_65918480 from 'nuxt_plugin_vuescrollnav_65918480' // Source: ../plugins/vue-scroll-nav (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"dir":"ltr"},"title":"ANETQUICK SOLUTIONS","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"ANETQUICK SOLUTIONS"},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#2196f3"},{"property":"author","content":"luxi"},{"property":"og:site_name","content":"luxi.ux-maestro.com"},{"property":"og:locale","content":"en_US"},{"property":"og:type","content":"website"},{"property":"twitter:site","content":"luxi.ux-maestro.com"},{"property":"twitter:domain","content":"luxi.ux-maestro.com"},{"property":"twitter:creator","content":"luxi"},{"property":"twitter:card","content":"summary"},{"property":"twitter:image:src","content":"\u002Fimages\u002Flogo.png"},{"property":"og:url","content":undefined},{"property":"og:title","content":"ANETQUICK SOLUTIONS"},{"property":"og:description","content":"ANETQUICK SOLUTIONS"},{"name":"twitter:site","content":undefined},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:image","content":"\u002Fstatic\u002Fimages\u002Fnew\u002Flogo2.jpg"},{"property":"og:image","content":"\u002Fstatic\u002Fimages\u002Fnew\u002Flogo2.jpg"},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"}],"link":[{"rel":"shortcut icon","href":"\u002Fimages\u002Fnew\u002Flogo2.jpg"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto+Condensed:400,700&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Fcode.ionicframework.com\u002Fionicons\u002F2.0.1\u002Fcss\u002Fionicons.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_pluginrouting_f5c19b34 === 'function') {
    await nuxt_plugin_pluginrouting_f5c19b34(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_1adf42c9 === 'function') {
    await nuxt_plugin_pluginmain_1adf42c9(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_198c9038 === 'function') {
    await nuxt_plugin_plugin_198c9038(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtgooglemaps_7f2d2312 === 'function') {
    await nuxt_plugin_nuxtgooglemaps_7f2d2312(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_b86d9930 === 'function') {
    await nuxt_plugin_nuxtmq_b86d9930(app.context, inject)
  }

  if (typeof nuxt_plugin_vuewowconfig_32ee3066 === 'function') {
    await nuxt_plugin_vuewowconfig_32ee3066(app.context, inject)
  }

  if (typeof nuxt_plugin_vuefragmentconfig_12a6b83c === 'function') {
    await nuxt_plugin_vuefragmentconfig_12a6b83c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelightboxconfig_28f6899d === 'function') {
    await nuxt_plugin_vuelightboxconfig_28f6899d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueyoutubeconfig_52b5d649 === 'function') {
    await nuxt_plugin_vueyoutubeconfig_52b5d649(app.context, inject)
  }

  if (typeof nuxt_plugin_i18nconfig_ad306bc6 === 'function') {
    await nuxt_plugin_i18nconfig_ad306bc6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_carousselconfig_6e4e7344 === 'function') {
    await nuxt_plugin_carousselconfig_6e4e7344(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollnav_65918480 === 'function') {
    await nuxt_plugin_vuescrollnav_65918480(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
