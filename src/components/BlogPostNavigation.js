import React from "react"
import { Link } from "gatsby"

export default ({ previous, next }) => (
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
    <div className={`blog_single-next ${next && "blog_single-next_chevron"}`}>
      {next && (
        <Link to={next.frontmatter.path}>{`${next.frontmatter.title}`}</Link>
      )}
    </div>
  </div>
)
