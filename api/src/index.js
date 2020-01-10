const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Subscription = require('./resolvers/Subscription');
const path = require("path");

const AWS = require('aws-sdk')
const { createWriteStream, existsSync, mkdirSync } = require("fs");

// AWS.config.loadFromPath(`${__dirname}/credentials.json`);

// const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Nendoroid = require('./resolvers/Nendoroid');
const Interaction = require('./resolvers/Interaction');

existsSync(path.join(__dirname, "../images")) || mkdirSync(path.join(__dirname, "../images"));

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
