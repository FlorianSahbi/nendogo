const path = require('path');

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
  `);

  const NENDO_PAGE_QUERY = await graphql(`
    {
      api {
        getNendoroids {
          nendoroids {
            title
            srcUrl
            specifications
            series
            sculptor
            releasedBy
            releaseDate
            range
            price
            planningProduction
            number
            name
            images
            formattedName
            id
            distributedBy
            description
            cooperation
            category
            manufacturer
            interactions {
              id
              type
              user {
                avatar
                pseudo
                id
              }
            }
          }
        }
      }
    }
  `);

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
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*";
    createPage(page);
  };
};
