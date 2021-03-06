module.exports = {
  siteMetadata: {
    title: `OGIBLOG | ブログ`,
    author: `Kota Ogi`,
    description: ``,
    siteUrl: `https://blog.ogikota.jp`,
    social: {
      twitter: `atk420t`
    },
    categories: [
      {
        name: "Self",
        slug: "self",
        color: "#f7ad5e"
      },{
        name: "Photo",
        slug: "photo",
        color: "#0c9ee4"
      },
      {
        name: "Dev",
        slug: "dev",
        color: "#f7615f"
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 650,
              height: 365
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-twemoji-shortcut`,
            options: {
              classname: "twemoji"
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional"
                },
                info: {
                  classes: "info",
                  title: "optional"
                },
                alert: {
                  classes: "alert",
                  title: "optional"
                },
                notice: {
                  classes: "notice",
                  title: "optional"
                },
                imageSmall: {
                  classes: "image-small"
                },
                imageMedium: {
                  classes: "image-medium"
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OGI BLOG | ブログ`,
        short_name: `OGI BLOG`,
        start_url: `/`,
        background_color: `rgb(33, 36, 45)`,
        theme_color: `#0c9ee4`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131492907-2"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
