import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"
import MasonryGrid from "src/components/MasonryGrid"

export default ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { title, projectLink } = data.markdownRemark.frontmatter
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
    .map(({ node }) => node.childImageSharp.fluid)

  return (
    <Layout>
      <div className="mb-4">
        <div className="blog_single-title">
          <h1 className="accent-heading">{title}</h1>
          <a className="blog_single-button" href={projectLink}>
            Visit Website
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <MasonryGrid>
          {masonryImages.map(image => {
            return <Img fluid={image} />
          })}
        </MasonryGrid>
      </div>
      <div className="blog_single-nav mb-4">
        <div
          className={`blog_single-next ${
            previous && "blog_single-previous_chevron"
          }`}
        >
          {previous && (
            <Link to={previous.frontmatter.path}>
              {`${previous.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div
          className={`blog_single-next ${next && "blog_single-next_chevron"}`}
        >
          {next && (
            <Link
              to={next.frontmatter.path}
            >{`${next.frontmatter.title}`}</Link>
          )}
        </div>
      </div>
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
      }
    }
    allFile(filter: { relativeDirectory: { eq: $directory } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
