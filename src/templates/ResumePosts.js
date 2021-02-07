import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"

const ResumePosts = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        {edges.map(edge => {
          const { title, appointmentLength, role } = edge.node.frontmatter
          const { excerpt, html } = edge.node
          return (
            <div className="mb-5" key={edge.node.id}>
              <div>
                <h2 className="resume_post-title accent-heading">{title}</h2>
              </div>
              <div className="resume_post-content">
                <div className="resume_post-info">
                  <div className="resume_post-role">{role && role}</div>
                  <div className="resume_post-date">
                    {appointmentLength && appointmentLength}
                  </div>
                </div>
                <div className="resume_post-excerpt">
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ResumePostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "resume" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 800)
          html
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            appointmentLength
            role
            title
            category
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default ResumePosts
