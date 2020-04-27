import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <div>
        {edges.map(({ node }) => {
          const { title, path, date, excerpt } = node.frontmatter
          let featuredImg = node.frontmatter.featuredImage.childImageSharp.fixed
          return (
            <div key={node.id}>
              <Link to={path}>
                <h2 className="accent-heading">{title}</h2>
              </Link>
              <div style={{ width: "250px" }}>
                <Img fixed={featuredImg} />
              </div>
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
            featuredImage {
              childImageSharp {
                fixed(width: 400) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
