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
        getNendoroid(id: "5e0500b6ff57ca94d71843c6") {
          category
          cooperation
          description
          distributedBy
          formattedName
          id
          images
          interactions {
            id
            type
            user {
              avatar
              id
              pseudo
            }
          }
          manufacturer
          number
          name
          planningProduction
          price
          range
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

  const nendoroids = await NENDO_PAGE_QUERY.data.api.getNendoroids.nendoroids;
  const users = await USER_PAGE_QUERY.data.api.getUsers.users;

  nendoroids.forEach((nendoroid) => {
    createPage({
      path: `${nendoroid.formattedName}`,
      component: templateNendo,
      context: nendoroid,
    })
  });

  users.forEach((user) => {
    createPage({
      path: `${user.pseudo}`,
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
