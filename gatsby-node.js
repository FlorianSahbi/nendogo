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
