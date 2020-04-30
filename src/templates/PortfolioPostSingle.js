import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"

export default ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const title = data.markdownRemark.frontmatter.title
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
  console.log(masonryImages)

  return (
    <Layout>
      <div>
        <h1 className="blog_single-title accent-heading">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          {masonryImages.map(image => {
            return <Img fluid={image} />
          })}
        </div>
      </div>
      <div className="blog_single-nav">
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
