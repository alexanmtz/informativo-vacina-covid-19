export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alexandremagno/projects/informativo-vacina-covid-19/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--doc-vue" */ "/Users/alexandremagno/projects/informativo-vacina-covid-19/src/templates/Doc.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/alexandremagno/projects/informativo-vacina-covid-19/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alexandremagno/projects/informativo-vacina-covid-19/node_modules/gridsome/app/pages/404.vue")
  }
]

