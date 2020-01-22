const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Subscription = require('./resolvers/Subscription');
const path = require("path");
const { existsSync, mkdirSync } = require("fs");
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Image = require('./resolvers/Image');
const Nendoroid = require('./resolvers/Nendoroid');
const Interaction = require('./resolvers/Interaction');
require('dotenv').config();

existsSync(path.join(__dirname, "../images")) || mkdirSync(path.join(__dirname, "../images"));

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

server.start(() => console.log(`Server is running on http://localhost:4000`));
