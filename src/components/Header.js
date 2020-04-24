import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndIntro = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div className="header d-flex justify-content-center">
      <div>
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description}</p>
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
