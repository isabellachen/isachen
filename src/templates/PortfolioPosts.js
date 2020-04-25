import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <div>
        {edges.map(edge => {
          const { title, path, date, excerpt } = edge.node.frontmatter
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
  query PortfolioPostsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          id
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
