import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"
import MasonryCols from "src/components/MasonryCols"
import BlogPostNavigation from "src/components/BlogPostNavigation"

const PortfolioPostSingle = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const {
    title,
    projectLink,
    showMasonry,
    buttonText,
  } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const masonryImages = data.allFile.edges
    .filter(({ node }) => {
      const childImageSharp = node && node.childImageSharp
      const src = childImageSharp && childImageSharp.fluid.src
      let re = /featured/
      const foundFeatured = src && src.match(re)

      // Filter for file nodes that have images and are not featured images
      return childImageSharp !== null && !foundFeatured
    })
    .map(({ node }) => {
      return node.childImageSharp.fluid
    })

  return (
    <Layout>
      <div className="portfolio_single mb-4">
        <div className="portfolio_single-title">
          <h1 className="accent-heading">{title}</h1>
          <a className="portfolio_single-button" href={projectLink}>
            {buttonText && buttonText}
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {showMasonry && (
          <MasonryCols>
            {masonryImages.map((image, index) => {
              return (
                <a key={index} className="image-link-wrapper" href={image.src}>
                  <Img fluid={image} />
                </a>
              )
            })}
          </MasonryCols>
        )}
      </div>
      <BlogPostNavigation next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $directory: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        projectLink
        title
        showMasonry
        buttonText
      }
    }
    allFile(filter: { relativeDirectory: { eq: $directory } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default PortfolioPostSingle
