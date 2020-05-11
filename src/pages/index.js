import React from "react"
import Layout from "src/components/Layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const profileImg = data.profile.childImageSharp.fixed
  return (
    <Layout>
      <div className="landing-intro">
        <div className="landing-intro_profile">
          <Img fixed={profileImg} />
        </div>
        <div className="landing-intro_inner">
          <h2 className="landing-title accent-heading">Hi! I'm Isa</h2>
          <div className="landing_content">
            <p>
              I'm a full-stack developer and web designer. Maybe you have a
              great idea for a website or app, but don't know how to begin. Or,
              maybe, you just want to improve the look and performance of your
              website.
            </p>
            <p>
              I have worked on projects with both big clients like Microsoft,
              and small businesses and NGOs. My professional career in software
              development and design means your project will look good on the
              outside and be tidy and performant behind the scenes.
            </p>
          </div>
        </div>
      </div>
      <div className="landing-action">
        <div className="landing-action_inner">
          <h2 className="landing-title accent-heading">Work with Me</h2>
          <div className="landing_content">
            <p>
              I love working on tech projects - making websites and apps is more
              than a profession for me, it's a passion. I have experience with a
              large variety of technologies both on the front-end and back-end,
              so you can trust me to find you the best solution for your needs.
              What I provide is strategic thinking that bridges design and
              development.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "dev-profile.jpg" }) {
      childImageSharp {
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
