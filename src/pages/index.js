import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/Layout"
import BlogPosts from "src/components/BlogPosts"
import "src/styles/app.scss"

export default ({ data }) => {
  return (
    <Layout>
      <BlogPosts data={data} />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(fromNow: false)
            excerpt
          }
        }
      }
    }
  }
`
