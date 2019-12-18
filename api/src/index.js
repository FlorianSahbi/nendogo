const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const Subscription = require('./resolvers/Subscription')


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Nendoroid = require('./resolvers/Nendoroid')
const Interaction = require('./resolvers/Interaction')

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Nendoroid,
    Interaction,
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`));