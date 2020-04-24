import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndIntro = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{description}</p>
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
