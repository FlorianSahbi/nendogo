function nendoroid(parent, args, context) {
  return context.prisma.interaction({ id: parent.id }).nendoroid()
}

function user(parent, args, context) {
  return context.prisma.interaction({ id: parent.id }).user()
}

module.exports = {
  nendoroid,
  user,
}