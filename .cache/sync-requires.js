const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/atk420t/Desktop/ogiblog/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-categories-js": hot(preferDefault(require("/Users/atk420t/Desktop/ogiblog/src/templates/categories.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/atk420t/Desktop/ogiblog/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/atk420t/Desktop/ogiblog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/atk420t/Desktop/ogiblog/src/pages/index.js")))
}

