import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        {edges.map(edge => {
          console.log(edge.node)
          const { title, path, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <div key={edge.node.id}>
              <Link to={path}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
              <p>{excerpt}</p>
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
