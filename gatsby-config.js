/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Isa Chen",
    description:
      "Computers are like bikinis. They save people a lot of guesswork.",
  },
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-plugin-root-import",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,900`,
          `Lato\:100,300,400,700`,
          `Merriweather\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
  ],
}
