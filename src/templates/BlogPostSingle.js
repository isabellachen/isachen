import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

export default ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout>
      <div className="mb-4">
        <h1 className="blog_single-title accent-heading">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
