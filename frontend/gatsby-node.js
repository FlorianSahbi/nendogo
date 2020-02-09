const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const templateNendo = path.resolve("./src/templates/nendoroid/index.js");
//   const templateUser = path.resolve('./src/templates/user/index.js');
//   const templateSerie = path.resolve('./src/templates/serie/index.js');
//   const templateSculptor = path.resolve('./src/templates/sculptor/index.js');
//   const templateManufacturer = path.resolve('./src/templates/manufacturer/index.js');

//   nendoroids.forEach((nendoroid) => {
//     createPage({
//       path: `nendoroid/${nendoroid.formattedName}`,
//       component: templateNendo,
//       context: nendoroid,
//     })
//   });

//   users.forEach((user) => {
//     createPage({
//       path: `user/${user.pseudo}`,
//       component: templateUser,
//       context: user,
//     })
//   });

//   series.forEach((serie) => {
//     createPage({
//       path: `serie/${serie.name}`,
//       component: templateSerie,
//       context: serie,
//     })
//   });

//   sculptors.forEach((sculptor) => {
//     createPage({
//       path: `sculptor/${sculptor.name}`,
//       component: templateSculptor,
//       context: sculptor,
//     })
//   });

//   manufacturers.forEach((manufacturer) => {
//     createPage({
//       path: `manufacturer/${manufacturer.name}`,
//       component: templateManufacturer,
//       context: manufacturer,
//     })
//   });
// };

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/user/)) {
//     page.matchPath = "/user/*";
//     createPage(page);
//   };
// };
