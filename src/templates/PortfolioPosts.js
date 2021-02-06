import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"

const PortfolioPosts = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <div>
        {edges.map(({ node }) => {
          const { title, path, date, featuredImage, clients } = node.frontmatter
          const { excerpt } = node
          let featuredImgFluid =
            featuredImage && featuredImage.childImageSharp.fluid
          return (
            <div className="portfolio_post mb-5" key={node.id}>
              <div className="portfolio_post-lg-screen-image">
                {featuredImgFluid && <Img fluid={featuredImgFluid} />}
              </div>
              <div className="portfolio_post-content">
                <Link to={path}>
                  <h2 className="portfolio_post-title accent-heading">
                    {title && title}
                  </h2>
                </Link>
                <div className="portfolio_clients">
                  {clients &&
                    clients.map((client, i) => {
                      if (i % 2 !== 1 && i !== clients.length - 1) {
                        return (
                          <span key={i}>
                            <i>{client}</i> |{" "}
                          </span>
                        )
                      } else {
                        return (
                          <span key={i}>
                            <i>{client}</i>
                          </span>
                        )
                      }
                    })}
                </div>
                {/* <div className="portfolio_post-date">{date}</div> */}
                <div className="portfolio_post-s-screen-image">
                  {featuredImgFluid && <Img fluid={featuredImgFluid} />}
                </div>
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 350)
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            category
            tags
            clients
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioPosts
