module.exports = {
  siteMetadata: {
    title: "Nendoroids",
    titleTemplate: "%s · Collection",
    description: "A tools to manage nendoroids collections.",
    url: "https://www.nendoroids.floriansahbi.com",
    image: "/images/mashiro.jpg",
    twitterUsername: "@floriansahbi",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116019269-4",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `nendoroids`, collection: `nendoroids` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    }
  ],
}
