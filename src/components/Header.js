import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const TitleAndIntro = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <div
      className="header uk-background-cover uk-light uk-flex"
      uk-parallax="bgy: -100"
    >
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/">
            <div className="header-title">{title}</div>
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
