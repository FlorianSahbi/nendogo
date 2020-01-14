async function getNendoroids(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { formattedName_contains: args.filter },
        { range_contains: args.filter },
      ],
    }
    : {}

  const nendoroids = await context.prisma.nendoroids({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}

async function getNendoroidsByRange(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: { formattedName_contains: args.name, number_lte: args.max, AND: { number_gte: args.min } },
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: { formattedName_contains: args.name, number_lte: args.max, AND: { number_gte: args.min } },
      orderBy: args.orderBy,
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}

async function getUsers(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { pseudo_contains: args.filter },
      ],
    }
    : {}

  const users = await context.prisma.users({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .usersConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    users,
    count,
  }
}

async function getImages(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { url_contains: args.filter },
      ],
    }
    : {}

  const images = await context.prisma.images({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .imagesConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    images,
    count,
  }
}

async function getSeries(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { name_contains: args.filter },
      ],
    }
    : {}

  const series = await context.prisma.series({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .seriesConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    series,
    count,
  }
}


async function getManufacturers(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { name_contains: args.filter },
      ],
    }
    : {}

  const manufacturers = await context.prisma.manufacturers({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .manufacturersConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    manufacturers,
    count,
  }
}

async function getSculptors(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { name_contains: args.filter },
      ],
    }
    : {}

  const sculptors = await context.prisma.sculptors({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .sculptorsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    sculptors,
    count,
  }
}

async function getInteractions(parent, args, context) {
  const interactions = await context.prisma.interactions({});
  const count = await context.prisma
    .interactionsConnection()
    .aggregate()
    .count()
  return {
    interactions,
    count,
  }
}

async function getNendoroid(parent, args, context) {
  const nendoroid = await context.prisma.nendoroid({ id: args.id });
  return nendoroid;
}

async function getUser(parent, args, context) {
  const user = await context.prisma.user({ id: args.id });
  return user;
}

async function getImage(parent, args, context) {
  const image = await context.prisma.image({ id: args.id });
  return image;
}

async function getUserByPseudo(parent, args, context) {
  const user = await context.prisma.user({ pseudo: args.pseudo });
  return user;
}

async function getNendoroidsLikedBy(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      interactions_some: {
        user: { id: args.id },
        AND: { type: "LIKE" }
      }
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        interactions_some: {
          user: { id: args.id },
          AND: { type: "LIKE" }
        }
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}

async function getNendoroidsWishedBy(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      interactions_some: {
        user: { id: args.id },
        AND: { type: "WISH" }
      }
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        interactions_some: {
          user: { id: args.id },
          AND: { type: "WISH" }
        }
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}

async function getNendoroidsOwnedBy(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      interactions_some: {
        user: { id: args.id },
        AND: { type: "OWN" }
      }
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        interactions_some: {
          user: { id: args.id },
          AND: { type: "OWN" }
        }
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}



async function getNendoroidsBySerie(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      series: args.series
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        series: args.series
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}
async function getNendoroidsByManufacturer(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      manufacturer: args.manufacturer
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        manufacturer: args.manufacturer
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}
async function getNendoroidsBySculptor(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      sculptor: args.sculptor
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        sculptor: args.sculptor
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
}



async function files(parent, args, context, info) {
  return files;
}

module.exports = {
  getNendoroidsLikedBy,
  getNendoroidsWishedBy,
  getNendoroidsOwnedBy,
  getManufacturers,
  getSculptors,
  getUser,
  getSeries,
  getNendoroid,
  getNendoroids,
  getUsers,
  getInteractions,
  getNendoroidsByRange,
  files,
  getNendoroidsBySerie,
  getNendoroidsBySerie,
  getNendoroidsByManufacturer,
  getNendoroidsBySculptor,
  getUserByPseudo,
  getImage,
  getImages,
}