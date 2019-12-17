"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Nendoroid",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Interaction",
    embedded: false
  },
  {
    name: "InteractionType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/floriansahbi-be662c/api/dev`
});
exports.prisma = new exports.Prisma();
