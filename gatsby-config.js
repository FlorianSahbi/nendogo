module.exports = {
  siteMetadata: {
    title: "Nendoroids",
    titleTemplate: "%s · NendoGO",
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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "NENDO",
        fieldName: "nendo",
        url: `http://localhost:4000`,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#131415`,
        theme_color: `#131415`,
        display: `minimal-ui`,
        icon: `src/images/mashiro.jpg`,
      },
    }
  ],
}
