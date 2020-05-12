import React from "react"
import Layout from "src/components/Layout"
import Img from "gatsby-image"
import { navigate } from "gatsby"

export default ({ data }) => {
  const profileImg = data.profile.childImageSharp.fixed
  return (
    <Layout>
      <div className="pt-2">
        <div className="landing-intro mb-5">
          <div className="landing-intro_profile">
            <Img fixed={profileImg} />
          </div>
          <div className="landing-intro_inner">
            <h2 className="landing-title accent-heading">Hi! I'm Isa</h2>
            <div className="landing_content">
              <p className="font-italic">
                I'm a full-stack developer and web designer.
              </p>
              <p>
                Do you have a great idea for a website or app, but don't know
                how to begin? Or, perhaps you want to improve the look and
                performance of your website?
              </p>
              <p>
                I have worked on projects with both big clients like Microsoft,
                and small businesses and NGOs. I can help you design and code
                your web project. My experience in both development and design
                means your project will look cool on the outside and be tidy and
                performant behind the scenes.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-action mb-5">
          <div className="landing-action_inner">
            <h2 className="landing-title accent-heading">Work with Me</h2>
            <div className="landing_content">
              <p>
                I love working on tech projects - making websites and apps is
                more than a profession for me, it's a passion. I have experience
                with a large variety of technologies both on the front-end and
                back-end, so you can trust me to find you the best solution for
                your needs. What I provide is strategic thinking that bridges
                design and development.
              </p>
            </div>
            <div>
              <button
                className="btn mr-4"
                onClick={() => {
                  navigate("/portfolio")
                }}
              >
                <span className="btn-text">Portfolio</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  navigate("/portfolio")
                }}
              >
                <span className="btn-text">Contact</span>
              </button>
            </div>
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
