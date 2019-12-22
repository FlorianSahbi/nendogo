const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Subscription = require('./resolvers/Subscription');
const { createWriteStream } = require('fs');
const mkdirp = require('mkdirp');
const shortid = require('shortid');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Nendoroid = require('./resolvers/Nendoroid');
const Interaction = require('./resolvers/Interaction');


const uploadDir = './uploads'
// const db = new lowdb(new FileSync('db.json'))

// Seed an empty DB
// db.defaults({ uploads: [] }).write()

// Ensure upload directory exists
mkdirp.sync(uploadDir)

const storeUpload = async ({ stream, filename }) => {
  const id = shortid.generate()
  const path = `${uploadDir}/${id}-${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject),
  )
}

const recordFile = file =>
  db
    .get('uploads')
    .push(file)
    .last()
    .write()

const processUpload = async upload => {
    const { createReadStream, filename, mimetype, encoding } = await upload
    const stream = createReadStream()
    const { id, path } = await storeUpload({ stream, filename })
    return recordFile({ id, filename, mimetype, encoding, path })
}

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