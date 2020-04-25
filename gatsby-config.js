/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Isa Chen",
    description: "Another Web Dev Blog",
  },
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-plugin-root-import",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `lato`],
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
