import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

const BlogPosts = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        {edges.map(edge => {
          const { title, path, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <div className="mb-5" key={edge.node.id}>
              <div>
                <Link to={path}>
                  <h2 className="blog_post-title accent-heading">{title}</h2>
                </Link>
              </div>
              <div className="blog_post-content">
                <div className="blog_post-date">{date}</div>
                <div className="blog_post-excerpt">
                  <p>{excerpt}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            category
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPosts
