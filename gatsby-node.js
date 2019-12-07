const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateNendo = path.resolve('./src/templates/nendo.js')
  const templateUser = path.resolve('./src/templates/user.js')

  const USER_PAGE_QUERY = await graphql(`
  {
  nendo {
  users {
  id
  avatar
  pseudo
  }
  }
  }
  `)

  const NENDO_PAGE_QUERY = await graphql(`
    {
    nendo {
    nendoroids {
    id
    category
    cooperation
    description
    formattedName
    distributedBy
    images
    manufacturer
    name
    number
    planningProduction
    range
    price
    releaseDate
    releasedBy
    sculptor
    series
    specifications
    srcUrl
    title
    }
    }
    }
    `)

  const nendoroids = await NENDO_PAGE_QUERY.data.nendo.nendoroids;
  const users = await USER_PAGE_QUERY.data.nendo.users;

  nendoroids.forEach(nendoroid => {
    createPage({
      path: nendoroid.formattedName,
      component: templateNendo,
      context: nendoroid,
    })
  })

  users.forEach(user => {
    createPage({
      path: user.pseudo,
      component: templateUser,
      context: user,
    })
  })
}


// ./gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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