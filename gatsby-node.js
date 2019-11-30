const path = require('path')
const data = require('./src/pages/nendoroids.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/nendo.js')

  data.forEach(e => {
    var path = e.number;
    createPage({
      path,
      component: template,
      context: e,
    })
  })
}