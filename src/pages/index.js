// import React from "react"
import { graphql } from "gatsby"
import "src/styles/app.scss"

export default ({ data }) => {
  if (typeof window !== "undefined") {
    window.location = "/blog"
  }

  return null
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
