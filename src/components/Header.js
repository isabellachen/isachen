import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const TitleAndIntro = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/">
            <h1 className="header-title">{title}</h1>
          </Link>
          <p className="header-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndIntro data={data} />}
    />
  )
}
