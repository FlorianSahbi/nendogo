const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.createUser({ ...args, password })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({ pseudo: args.pseudo })
    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

function post(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createNendoroid({
        formattedName: args.formattedName,
        number: args.number,
        // postedBy: { connect: { id: userId } },
    })
}

async function interaction(parent, args, context, info) {
    // 1
    const userId = getUserId(context)

    // 2
    const nendoroidExists = await context.prisma.$exists.interaction({
        user: { id: userId },
        nendoroid: { id: args.nendoroidId },
        type: { type: args.type },
    })
    if (nendoroidExists) {
        throw new Error(`Already interaction for nendoroid: ${args.nendoroidId}`)
    }

    // 3
    return context.prisma.createInteraction({
        user: { connect: { id: userId } },
        nendoroid: { connect: { id: args.nendoroidId } },
        type: { type: args.type },
    })
}

module.exports = {
    signup,
    login,
    post,
    interaction
}