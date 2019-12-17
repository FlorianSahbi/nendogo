const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateNendo = path.resolve('./src/templates/nendo.js')
  const templateUser = path.resolve('./src/templates/user.js')

  const USER_PAGE_QUERY = await graphql(`
  {
    api {
      users {
        users {
          pseudo
          id
          avatar
        }
      }
    }
  }
  `)

  const NENDO_PAGE_QUERY = await graphql(`
  {
    api {
      nendoroids {
        nendoroids {
          category
          cooperation
          description
          distributedBy
          formattedName
          id
          images
          interactions {
            id
            nendoroid {
              images
              id
              name
            }
          }
          manufacturer
          name
          number
          planningProduction
          range
          price
          releaseDate
          releasedBy
          sculptor
          srcUrl
          series
          specifications
          title
        }
      }
    }
  }
    `)

  const nendoroids = await NENDO_PAGE_QUERY.data.api.nendoroids.nendoroids;
  const users = await USER_PAGE_QUERY.data.api.users.users;

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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    createPage(page)
  }
}
