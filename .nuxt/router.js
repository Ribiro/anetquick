import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _577a917e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2126436c = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _546cc0cc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _577a917e,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _2126436c,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _546cc0cc,
    name: "contact___en"
  }, {
    path: "/de",
    component: _577a917e,
    name: "index___de"
  }, {
    path: "/id",
    component: _577a917e,
    name: "index___id"
  }, {
    path: "/pt",
    component: _577a917e,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _577a917e,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _2126436c,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _546cc0cc,
    name: "contact___ar"
  }, {
    path: "/de/blank-page",
    component: _2126436c,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _546cc0cc,
    name: "contact___de"
  }, {
    path: "/id/blank-page",
    component: _2126436c,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _546cc0cc,
    name: "contact___id"
  }, {
    path: "/pt/blank-page",
    component: _2126436c,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _546cc0cc,
    name: "contact___pt"
  }, {
    path: "/zh/blank-page",
    component: _2126436c,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _546cc0cc,
    name: "contact___zh"
  }, {
    path: "/",
    component: _577a917e,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
