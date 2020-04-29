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
          const { title, path, date } = node.frontmatter
          const { excerpt } = node
          let featuredImg = node.frontmatter.featuredImage.childImageSharp.fixed
          return (
            <div className="portfolio_post mb-5" key={node.id}>
              <div className="portfolio_post-image">
                <Img fixed={featuredImg} />
              </div>
              <div className="portfolio_post-content">
                <Link to={path}>
                  <h2 className="accent-heading">{title}</h2>
                </Link>
                <p>{date}</p>
                <p>{excerpt}</p>
              </div>
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
          excerpt(pruneLength: 500)
          frontmatter {
            path
            date
            title
            category
            tags
            featuredImage {
              childImageSharp {
                fixed(width: 250) {
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
