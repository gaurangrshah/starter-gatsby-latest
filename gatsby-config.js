require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `gsd`,
    tagline: `Developers of rich applications`,
    description: `this is the site descritpion`,
    language: `en`,
    siteUrl: `https://www.livewebsiteURL.com`,
    author: `@jammersio`,
    pages: [
      { label: "home", path: "/" },
      { label: "about us", path: "/about/" },
      { label: "services", path: "/services/" },
      { label: "policies", path: "/policies/" },
      { label: "contact", path: "/contact/" },
    ],
    socialLinks: [
      { label: "facebook", path: "https://www.facebook.com" },
      { label: "twitter", path: "https://www.twitter.com" },
      { label: "instagram", path: "https://www.instagram.com" },
      { label: "linkedin", path: "https://www.linkedin.com" },
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
  pathPrefix: "/starter-master-gatsby", // for ghpages
  // https://blog.bitsrc.io/deploy-a-gatsby-site-on-github-pages-for-free-f18853c1b7a9
}
