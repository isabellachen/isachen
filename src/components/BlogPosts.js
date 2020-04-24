import React from "react"
import { Link } from "gatsby"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div>
      {edges.map(edge => {
        const { title, path, date, excerpt } = edge.node.frontmatter
        return (
          <div key={edge.node.id}>
            <Link to={path}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}
