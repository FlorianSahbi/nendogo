// const path = require('path')
// // const data = require('./src/pages/nendoroids.json')

// const users = require('./src/pages/users.json')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const template = path.resolve('./src/templates/nendo.js')
//   const templateUser = path.resolve('./src/templates/user.js')

//   const pages = await graphql(`
//   query {
//     allMongodbNendoroidsNendoroids(filter: {range: {eq: "901-1000"}}) {
//       edges {
//         node {
//           name
//           formattedName
//           number
//           title
//           description
//           images
//           series
//           manufacturer
//           category
//           price
//           releaseDate
//           specifications
//           sculptor
//           cooperation
//           planningProduction
//           srcUrl
//         }
//       }
//     }
//   }
//  `)
//   let nendoroids = pages.data.allMongodbNendoroidsNendoroids.edges

//   nendoroids.forEach(e => {
//     var path = e.node.number;
//     createPage({
//       path,
//       component: template,
//       context: e.node,
//     })
//   })

//   users.forEach(e => {
//     var path = e.pseudo;
//     createPage({
//       path,
//       component: templateUser,
//       context: e,
//     })
//   })
// }

// // ./gatsby-node.js
// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/account/)) {
//     page.matchPath = "/account/*"

//     // Update the page.
//     createPage(page)
//   }
// }

// // above code unchanged
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     /*
//      * During the build step, `auth0-js` will break because it relies on
//      * browser-specific APIs. Fortunately, we don’t need it during the build.
//      * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
//      * during the build. (See `src/utils/auth.js` to see how we prevent this
//      * from breaking the app.)
//      */
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /auth0-js/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }