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
  const blogPostSingle = path.resolve("src/templates/BlogPostSingle.js")
  try {
    const query = await graphql(
      `
        query BlogPostsPathQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
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

    const posts = query.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      const path = node.frontmatter.path

      createBlogPages(createPage, posts)
      createPortfolioPages(createPage, posts)

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
