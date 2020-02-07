const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/client');

const Subscription = require('./graphql/resolvers/Subscription');
const Query = require('./graphql/resolvers/Query');
const Mutation = require('./graphql/resolvers/Mutation');
const User = require('./graphql/resolvers/User');
const Image = require('./graphql/resolvers/Image');
const Nendoroid = require('./graphql/resolvers/Nendoroid');
const Interaction = require('./graphql/resolvers/Interaction');

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
  typeDefs: './graphql/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

const options = {
  port: 5100,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
