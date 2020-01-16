const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateNendo = path.resolve("./src/templates/nendoroid/index.js");
  const templateUser = path.resolve('./src/templates/user/index.js');
  const templateSerie = path.resolve('./src/templates/serie/index.js');
  const templateSculptor = path.resolve('./src/templates/sculptor/index.js');
  const templateManufacturer = path.resolve('./src/templates/manufacturer/index.js');

  const PAGES = await graphql(`
{
  prisma {
    manufacturers {
      id
      name
    }
    sculptors {
      id
      name
    }
    series {
      name
      id
    }
    users {
      avatar
      pseudo
      id
    }
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
`);

  const { data: { prisma: { nendoroids, users, series, sculptors, manufacturers } } } = await PAGES;

  nendoroids.forEach((nendoroid) => {
    console.log(nendoroid.formattedName.trim().toLowerCase().replace(/ /g, "-").replace(":", "").replace("&", "and").replace("(", "").replace(")", "").replace(".", ""))
    createPage({
      path: `nendoroid/${nendoroid.formattedName.trim().toLowerCase().replace(/ /g, "-").replace(":", "").replace("&", "and").replace("(", "").replace(")", "").replace(".", "")}`,
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

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/user/)) {
//     page.matchPath = "/user/*";
//     createPage(page);
//   };
// };
