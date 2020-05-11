import React from "react"
import { Link } from "gatsby"

export default ({ previous, next }) => (
  <div className="blog_nav">
    <div className={`blog_nav-next ${previous && "blog_nav-previous_chevron"}`}>
      {previous && (
        <Link to={previous.frontmatter.path}>
          {`${previous.frontmatter.title}`}
        </Link>
      )}
    </div>
    <div className={`blog_nav-next ${next && "blog_nav-next_chevron"}`}>
      {next && (
        <Link to={next.frontmatter.path}>{`${next.frontmatter.title}`}</Link>
      )}
    </div>
  </div>
)
