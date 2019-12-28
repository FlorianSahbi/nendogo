const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateNendo = path.resolve("./src/templates/nendoroid/index.js");
  const templateUser = path.resolve('./src/templates/user/index.js');

  const USER_PAGE_QUERY = await graphql(`
  {
    api {
      getUsers {
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
      getNendoroids(orderBy: number_ASC) {
        nendoroids {
          category
          images
          cooperation
          distributedBy
          formattedName
          id
          interactions {
            id
            nendoroid {
              id
              name
            }
            user {
              avatar
              pseudo
            }
            type
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

  const nendoroids = await NENDO_PAGE_QUERY.data.api.getNendoroids.nendoroids;
  const users = await USER_PAGE_QUERY.data.api.getUsers.users;

  nendoroids.forEach((nendoroid) => {
    createPage({
      path: `nendoroid/${nendoroid.formattedName}`,
      component: templateNendo,
      context: nendoroid,
    })
  });

  users.forEach((user) => {
    createPage({
      path: `user/${user.pseudo}`,
      component: templateUser,
      context: user,
    })
  });
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    createPage(page)
  }
}
