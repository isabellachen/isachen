const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostSingle = path.resolve("src/templates/BlogPostSingle.js")
  return graphql(
    `
      query BlogPostsPathQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      console.error(result.errors)
    }

    console.log(JSON.stringify(result.data.allMarkdownRemark.edges))
    const edges = result.data.allMarkdownRemark.edges
    edges.forEach(({ node }) => {
      console.log(JSON.stringify(node.frontmatter.path))
      createPage({
        path: `${node.frontmatter.path}`,
        component: blogPostSingle,
      })
    })
  })
}
