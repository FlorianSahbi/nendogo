module.exports = {
  siteMetadata: {
    title: "Nendoroids",
    titleTemplate: "%s · NendoGO",
    description: "A tools to manage nendoroids collections.",
    url: "https://www.nendogo.com",
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
        typeName: "API",
        fieldName: "api",
        url: "http://localhost:4000",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          typography: {
            fontFamily: [
              "Cinzel",
              "Raleway",
            ].join(","),
          },
        },
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PRISMA",
        fieldName: "prisma",
        url: `http://localhost:4466`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116019269-4",
      }
    },
  ],
}
