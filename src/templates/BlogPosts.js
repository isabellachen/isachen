import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        {edges.map(edge => {
          const { title, path, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <div className="mb-5" key={edge.node.id}>
              <div className="blog_post-title">
                <Link to={path}>
                  <h2 className="accent-heading">{title}</h2>
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
            date
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
