
function user(parent, args, context) {
    return context.prisma.image({ id: parent.id }).user()
}

module.exports = {
    user,
}