const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createWriteStream } = require("fs");
const { APP_SECRET, getUserId } = require('../utils')
const path = require("path");
const files = [];

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

function createNendoroid(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createNendoroid({
    formattedName: args.formattedName,
    number: args.number,
    // postedBy: { connect: { id: userId } },
  })
}

async function createInteraction(parent, args, context, info) {
  // const userId = getUserId(context)
  const nendoroidExists = await context.prisma.$exists.interaction({
    user: { id: args.userId },
    nendoroid: { id: args.nendoroidId },
    type: args.type,
  })
  if (nendoroidExists) {
    throw new Error(`Already interaction for nendoroid: ${args.nendoroidId}`)
  }

  return context.prisma.createInteraction({
    user: { connect: { id: args.userId } },
    nendoroid: { connect: { id: args.nendoroidId } },
    type: args.type,
  })
}

async function deleteInteraction(parent, args, context, info) {
  const interaction = await context.prisma.deleteInteraction({ id: args.interactionId });
  return interaction;
}

async function uploadFile(_, { file }) {
  const { createReadStream, filename } = await file;
  await new Promise(res =>
    createReadStream()
      .pipe(createWriteStream(path.join(__dirname, "../../images", filename)))
      .on("close", res)
  );
  files.push(filename);

  return true;
}



module.exports = {
  signup,
  login,
  createNendoroid,
  createInteraction,
  deleteInteraction,
  uploadFile,
}