const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateNendo = path.resolve("./src/templates/nendoroid/index.js");
  const templateUser = path.resolve('./src/templates/user/index.js');
  const templateSerie = path.resolve('./src/templates/serie/index.js');
  const templateSculptor = path.resolve('./src/templates/sculptor/index.js');
  const templateManufacturer = path.resolve('./src/templates/manufacturer/index.js');
  

  const MANUFACTURER_PAGE_QUERY = await graphql(`
  {
      api {
        getManufacturers {
          count
          manufacturers {
            id
            name
          }
        }
      }
    }
  `);

  const SCULPTOR_PAGE_QUERY = await graphql(`
  {
    api {
      getSculptors {
        count
        sculptors {
          id
          name
        }
      }
    }
  }
  
  `);

  const SERIE_PAGE_QUERY = await graphql(`
  query MyQuery {
    api {
      getSeries {
        count
        series {
          name
          id
        }
      }
    }
  }
  `)

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
  const series = await SERIE_PAGE_QUERY.data.api.getSeries.series;
  const sculptors = await SCULPTOR_PAGE_QUERY.data.api.getSculptors.sculptors;
  const manufacturers = await MANUFACTURER_PAGE_QUERY.data.api.getManufacturers.manufacturers;

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

  series.forEach((serie) => {
    createPage({
      path: `serie/${serie.name}`,
      component: templateSerie,
      context: serie,
    })
  });

  sculptors.forEach((sculptor) => {
    createPage({
      path: `sculptor/${sculptor.name}`,
      component: templateSculptor,
      context: sculptor,
    })
  });

  manufacturers.forEach((manufacturer) => {
    createPage({
      path: `manufacturer/${manufacturer.name}`,
      component: templateManufacturer,
      context: manufacturer,
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
