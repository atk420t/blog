// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-categories-js": () => import("/Users/atk420t/Desktop/Project/ogiblog/src/templates/categories.js" /* webpackChunkName: "component---src-templates-categories-js" */),
  "component---src-templates-post-js": () => import("/Users/atk420t/Desktop/Project/ogiblog/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/atk420t/Desktop/Project/ogiblog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/atk420t/Desktop/Project/ogiblog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/atk420t/Desktop/Project/ogiblog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/atk420t/Desktop/Project/ogiblog/.cache/data.json")

