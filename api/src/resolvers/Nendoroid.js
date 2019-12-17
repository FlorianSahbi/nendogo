

function interactions(parent, args, context) {
  return context.prisma.nendoroid({ id: parent.id }).interactions()
}

module.exports = {
  interactions
}