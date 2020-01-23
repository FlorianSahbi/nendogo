const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Subscription = require('./resolvers/Subscription');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Image = require('./resolvers/Image');
const Nendoroid = require('./resolvers/Nendoroid');
const Interaction = require('./resolvers/Interaction');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Image,
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

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
