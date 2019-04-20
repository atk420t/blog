const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-categories-js": hot(preferDefault(require("/Users/atk420t/Desktop/Project/ogiblog/src/templates/categories.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/atk420t/Desktop/Project/ogiblog/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/atk420t/Desktop/Project/ogiblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/atk420t/Desktop/Project/ogiblog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/atk420t/Desktop/Project/ogiblog/src/pages/index.js")))
}

