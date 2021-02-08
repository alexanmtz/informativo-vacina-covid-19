const c1 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\WMANZ\\Desktop\\projetos\\os\\informativo-vacina-covid-19\\src\\pages\\404.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-doc-vue" */ "C:\\Users\\WMANZ\\Desktop\\projetos\\os\\informativo-vacina-covid-19\\src\\templates\\Doc.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\WMANZ\\Desktop\\projetos\\os\\informativo-vacina-covid-19\\src\\pages\\Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    path: "/:slug/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
