const path = require("path")

const createBlogPages = createPage => {
  const BlogPosts = path.resolve("src/templates/BlogPosts.js")
  createPage({
    path: "/blog",
    component: BlogPosts,
  })
}

const createPortfolioPages = createPage => {
  const PortfolioPosts = path.resolve("src/templates/PortfolioPosts.js")
  createPage({
    path: "/portfolio",
    component: PortfolioPosts,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createBlogPages(createPage)
  createPortfolioPages(createPage)

  const blogPostSingle = path.resolve("src/templates/BlogPostSingle.js")
  const portfolioPostSingle = path.resolve(
    "src/templates/PortfolioPostSingle.js"
  )

  try {
    const blogPostsQuery = await graphql(
      `
        query BlogPostsPathQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "blog" } } }
          ) {
            edges {
              next {
                frontmatter {
                  path
                  title
                }
              }
              previous {
                frontmatter {
                  path
                  title
                }
              }
              node {
                frontmatter {
                  path
                  category
                }
              }
            }
          }
        }
      `,
      { limit: 1000 }
    )

    const portfolioPostsQuery = await graphql(
      `
        query PortfolioPostsPathQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "portfolio" } } }
          ) {
            edges {
              next {
                frontmatter {
                  path
                  title
                }
              }
              previous {
                frontmatter {
                  path
                  title
                }
              }
              node {
                frontmatter {
                  path
                  category
                }
              }
            }
          }
        }
      `,
      { limit: 1000 }
    )

    const blogPosts = blogPostsQuery.data.allMarkdownRemark.edges
    const portfolioPosts = portfolioPostsQuery.data.allMarkdownRemark.edges

    blogPosts.forEach(({ node, next, previous }) => {
      const path = node.frontmatter.path

      createPage({
        path,
        component: blogPostSingle,
        context: {
          slug: path, // use 'slug', as 'path' is reserved keyword. Access in component as props.pageContext.slug
          previous,
          next,
        },
      })
    })

    portfolioPosts.forEach(({ node, next, previous }) => {
      const path = node.frontmatter.path

      createPage({
        path,
        component: portfolioPostSingle,
        context: {
          slug: path, // use 'slug', as 'path' is reserved keyword. Access in component as props.pageContext.slug
          directory: path.split("/")[1],
          previous,
          next,
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "uikit-util": path.resolve(__dirname, "node_modules/uikit/src/js/util"),
      },
    },
  })
}
