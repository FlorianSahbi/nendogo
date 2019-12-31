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

  const manufacturer = await context.prisma.manufacturers({
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

async function getNendoroidsByRange(parent, args, context, info) {
  const nendoroids = await context.prisma.nendoroids({
    where: {
      range: args.range
    },
  })
  const count = await context.prisma
    .nendoroidsConnection({
      where: {
        range: args.range
      },
    })
    .aggregate()
    .count()
  return {
    nendoroids,
    count,
  }
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
}