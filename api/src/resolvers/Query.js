async function nendoroids(parent, args, context) {
  const where = args.filter
    ? {
      OR: [
        { formattedName_contains: args.filter },
        { arnge_contains: args.filter },
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

async function users(parent, args, context) {
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

module.exports = {
  nendoroids,
  users,
}