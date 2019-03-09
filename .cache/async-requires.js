// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/atk420t/Desktop/ogiblog/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-categories-js": () => import("/Users/atk420t/Desktop/ogiblog/src/templates/categories.js" /* webpackChunkName: "component---src-templates-categories-js" */),
  "component---src-templates-post-js": () => import("/Users/atk420t/Desktop/ogiblog/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-404-js": () => import("/Users/atk420t/Desktop/ogiblog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/atk420t/Desktop/ogiblog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/atk420t/Desktop/ogiblog/.cache/data.json")

