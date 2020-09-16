require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Penn Star`,
    tagline: `Land Transfer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    language: `en`,
    siteUrl: `http://www.pennstarland.com`,
    author: `@jammersio`,
    pages: [
      { page: "home", to: "/" },
      { page: "about us", to: "/about/" },
      { page: "services", to: "/services/" },
      { page: "policies", to: "/policies/" },
      { page: "covid", to: "/covid/" },
      { page: "contact", to: "/contact/" },
    ],
    socialLinks: [
      { channel: "facebook", to: "https://www.facebook.com" },
      { channel: "twitter", to: "https://www.twitter.com" },
      { channel: "instagram", to: "https://www.instagram.com" },
      { channel: "linkedin", to: "https://www.linkedin.com" },
    ],
    brandColors: {
      primary: "#1F7A8C",
      secondary: "#67B26F",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 6,
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Encode+Sans:400,500,600,700"],
        },
      },
    },
  ],
  pathPrefix: "/starter-master-gatsby",
}
