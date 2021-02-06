import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/Layout"
import BlogPostNavigation from "src/components/BlogPostNavigation"

const BlogPostSingle = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout>
      <div className="mb-4">
        <h1 className="blog_single-title accent-heading">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <BlogPostNavigation next={next} previous={previous} />
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

export default BlogPostSingle
