module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateInteraction {
  count: Int!
}

type AggregateNendoroid {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Interaction {
  id: ID!
  nendoroid: Nendoroid!
  user: User!
  type: InteractionType!
}

type InteractionConnection {
  pageInfo: PageInfo!
  edges: [InteractionEdge]!
  aggregate: AggregateInteraction!
}

input InteractionCreateInput {
  id: ID
  nendoroid: NendoroidCreateOneWithoutInteractionsInput!
  user: UserCreateOneInput!
  type: InteractionType!
}

input InteractionCreateManyWithoutNendoroidInput {
  create: [InteractionCreateWithoutNendoroidInput!]
  connect: [InteractionWhereUniqueInput!]
}

input InteractionCreateWithoutNendoroidInput {
  id: ID
  user: UserCreateOneInput!
  type: InteractionType!
}

type InteractionEdge {
  node: Interaction!
  cursor: String!
}

enum InteractionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
}

type InteractionPreviousValues {
  id: ID!
  type: InteractionType!
}

input InteractionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: InteractionType
  type_not: InteractionType
  type_in: [InteractionType!]
  type_not_in: [InteractionType!]
  AND: [InteractionScalarWhereInput!]
  OR: [InteractionScalarWhereInput!]
  NOT: [InteractionScalarWhereInput!]
}

type InteractionSubscriptionPayload {
  mutation: MutationType!
  node: Interaction
  updatedFields: [String!]
  previousValues: InteractionPreviousValues
}

input InteractionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InteractionWhereInput
  AND: [InteractionSubscriptionWhereInput!]
}

enum InteractionType {
  LIKE
  WISH
  OWN
}

input InteractionUpdateInput {
  nendoroid: NendoroidUpdateOneRequiredWithoutInteractionsInput
  user: UserUpdateOneRequiredInput
  type: InteractionType
}

input InteractionUpdateManyDataInput {
  type: InteractionType
}

input InteractionUpdateManyMutationInput {
  type: InteractionType
}

input InteractionUpdateManyWithoutNendoroidInput {
  create: [InteractionCreateWithoutNendoroidInput!]
  delete: [InteractionWhereUniqueInput!]
  connect: [InteractionWhereUniqueInput!]
  set: [InteractionWhereUniqueInput!]
  disconnect: [InteractionWhereUniqueInput!]
  update: [InteractionUpdateWithWhereUniqueWithoutNendoroidInput!]
  upsert: [InteractionUpsertWithWhereUniqueWithoutNendoroidInput!]
  deleteMany: [InteractionScalarWhereInput!]
  updateMany: [InteractionUpdateManyWithWhereNestedInput!]
}

input InteractionUpdateManyWithWhereNestedInput {
  where: InteractionScalarWhereInput!
  data: InteractionUpdateManyDataInput!
}

input InteractionUpdateWithoutNendoroidDataInput {
  user: UserUpdateOneRequiredInput
  type: InteractionType
}

input InteractionUpdateWithWhereUniqueWithoutNendoroidInput {
  where: InteractionWhereUniqueInput!
  data: InteractionUpdateWithoutNendoroidDataInput!
}

input InteractionUpsertWithWhereUniqueWithoutNendoroidInput {
  where: InteractionWhereUniqueInput!
  update: InteractionUpdateWithoutNendoroidDataInput!
  create: InteractionCreateWithoutNendoroidInput!
}

input InteractionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nendoroid: NendoroidWhereInput
  user: UserWhereInput
  type: InteractionType
  type_not: InteractionType
  type_in: [InteractionType!]
  type_not_in: [InteractionType!]
  AND: [InteractionWhereInput!]
}

input InteractionWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createInteraction(data: InteractionCreateInput!): Interaction!
  updateInteraction(data: InteractionUpdateInput!, where: InteractionWhereUniqueInput!): Interaction
  updateManyInteractions(data: InteractionUpdateManyMutationInput!, where: InteractionWhereInput): BatchPayload!
  upsertInteraction(where: InteractionWhereUniqueInput!, create: InteractionCreateInput!, update: InteractionUpdateInput!): Interaction!
  deleteInteraction(where: InteractionWhereUniqueInput!): Interaction
  deleteManyInteractions(where: InteractionWhereInput): BatchPayload!
  createNendoroid(data: NendoroidCreateInput!): Nendoroid!
  updateNendoroid(data: NendoroidUpdateInput!, where: NendoroidWhereUniqueInput!): Nendoroid
  updateManyNendoroids(data: NendoroidUpdateManyMutationInput!, where: NendoroidWhereInput): BatchPayload!
  upsertNendoroid(where: NendoroidWhereUniqueInput!, create: NendoroidCreateInput!, update: NendoroidUpdateInput!): Nendoroid!
  deleteNendoroid(where: NendoroidWhereUniqueInput!): Nendoroid
  deleteManyNendoroids(where: NendoroidWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Nendoroid {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  number: String
  formattedName: String!
  title: String
  description: [String!]!
  images: [String!]!
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
  interactions(where: InteractionWhereInput, orderBy: InteractionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interaction!]
}

type NendoroidConnection {
  pageInfo: PageInfo!
  edges: [NendoroidEdge]!
  aggregate: AggregateNendoroid!
}

input NendoroidCreatedescriptionInput {
  set: [String!]
}

input NendoroidCreateimagesInput {
  set: [String!]
}

input NendoroidCreateInput {
  id: ID
  name: String
  number: String
  formattedName: String!
  title: String
  description: NendoroidCreatedescriptionInput
  images: NendoroidCreateimagesInput
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
  interactions: InteractionCreateManyWithoutNendoroidInput
}

input NendoroidCreateOneWithoutInteractionsInput {
  create: NendoroidCreateWithoutInteractionsInput
  connect: NendoroidWhereUniqueInput
}

input NendoroidCreateWithoutInteractionsInput {
  id: ID
  name: String
  number: String
  formattedName: String!
  title: String
  description: NendoroidCreatedescriptionInput
  images: NendoroidCreateimagesInput
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
}

type NendoroidEdge {
  node: Nendoroid!
  cursor: String!
}

enum NendoroidOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  number_ASC
  number_DESC
  formattedName_ASC
  formattedName_DESC
  title_ASC
  title_DESC
  series_ASC
  series_DESC
  manufacturer_ASC
  manufacturer_DESC
  category_ASC
  category_DESC
  price_ASC
  price_DESC
  releaseDate_ASC
  releaseDate_DESC
  specifications_ASC
  specifications_DESC
  sculptor_ASC
  sculptor_DESC
  cooperation_ASC
  cooperation_DESC
  planningProduction_ASC
  planningProduction_DESC
  releasedBy_ASC
  releasedBy_DESC
  distributedBy_ASC
  distributedBy_DESC
  srcUrl_ASC
  srcUrl_DESC
  range_ASC
  range_DESC
}

type NendoroidPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  number: String
  formattedName: String!
  title: String
  description: [String!]!
  images: [String!]!
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
}

type NendoroidSubscriptionPayload {
  mutation: MutationType!
  node: Nendoroid
  updatedFields: [String!]
  previousValues: NendoroidPreviousValues
}

input NendoroidSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NendoroidWhereInput
  AND: [NendoroidSubscriptionWhereInput!]
}

input NendoroidUpdatedescriptionInput {
  set: [String!]
}

input NendoroidUpdateimagesInput {
  set: [String!]
}

input NendoroidUpdateInput {
  name: String
  number: String
  formattedName: String
  title: String
  description: NendoroidUpdatedescriptionInput
  images: NendoroidUpdateimagesInput
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
  interactions: InteractionUpdateManyWithoutNendoroidInput
}

input NendoroidUpdateManyMutationInput {
  name: String
  number: String
  formattedName: String
  title: String
  description: NendoroidUpdatedescriptionInput
  images: NendoroidUpdateimagesInput
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
}

input NendoroidUpdateOneRequiredWithoutInteractionsInput {
  create: NendoroidCreateWithoutInteractionsInput
  update: NendoroidUpdateWithoutInteractionsDataInput
  upsert: NendoroidUpsertWithoutInteractionsInput
  connect: NendoroidWhereUniqueInput
}

input NendoroidUpdateWithoutInteractionsDataInput {
  name: String
  number: String
  formattedName: String
  title: String
  description: NendoroidUpdatedescriptionInput
  images: NendoroidUpdateimagesInput
  series: String
  manufacturer: String
  category: String
  price: String
  releaseDate: String
  specifications: String
  sculptor: String
  cooperation: String
  planningProduction: String
  releasedBy: String
  distributedBy: String
  srcUrl: String
  range: String
}

input NendoroidUpsertWithoutInteractionsInput {
  update: NendoroidUpdateWithoutInteractionsDataInput!
  create: NendoroidCreateWithoutInteractionsInput!
}

input NendoroidWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  formattedName: String
  formattedName_not: String
  formattedName_in: [String!]
  formattedName_not_in: [String!]
  formattedName_lt: String
  formattedName_lte: String
  formattedName_gt: String
  formattedName_gte: String
  formattedName_contains: String
  formattedName_not_contains: String
  formattedName_starts_with: String
  formattedName_not_starts_with: String
  formattedName_ends_with: String
  formattedName_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  series: String
  series_not: String
  series_in: [String!]
  series_not_in: [String!]
  series_lt: String
  series_lte: String
  series_gt: String
  series_gte: String
  series_contains: String
  series_not_contains: String
  series_starts_with: String
  series_not_starts_with: String
  series_ends_with: String
  series_not_ends_with: String
  manufacturer: String
  manufacturer_not: String
  manufacturer_in: [String!]
  manufacturer_not_in: [String!]
  manufacturer_lt: String
  manufacturer_lte: String
  manufacturer_gt: String
  manufacturer_gte: String
  manufacturer_contains: String
  manufacturer_not_contains: String
  manufacturer_starts_with: String
  manufacturer_not_starts_with: String
  manufacturer_ends_with: String
  manufacturer_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  releaseDate: String
  releaseDate_not: String
  releaseDate_in: [String!]
  releaseDate_not_in: [String!]
  releaseDate_lt: String
  releaseDate_lte: String
  releaseDate_gt: String
  releaseDate_gte: String
  releaseDate_contains: String
  releaseDate_not_contains: String
  releaseDate_starts_with: String
  releaseDate_not_starts_with: String
  releaseDate_ends_with: String
  releaseDate_not_ends_with: String
  specifications: String
  specifications_not: String
  specifications_in: [String!]
  specifications_not_in: [String!]
  specifications_lt: String
  specifications_lte: String
  specifications_gt: String
  specifications_gte: String
  specifications_contains: String
  specifications_not_contains: String
  specifications_starts_with: String
  specifications_not_starts_with: String
  specifications_ends_with: String
  specifications_not_ends_with: String
  sculptor: String
  sculptor_not: String
  sculptor_in: [String!]
  sculptor_not_in: [String!]
  sculptor_lt: String
  sculptor_lte: String
  sculptor_gt: String
  sculptor_gte: String
  sculptor_contains: String
  sculptor_not_contains: String
  sculptor_starts_with: String
  sculptor_not_starts_with: String
  sculptor_ends_with: String
  sculptor_not_ends_with: String
  cooperation: String
  cooperation_not: String
  cooperation_in: [String!]
  cooperation_not_in: [String!]
  cooperation_lt: String
  cooperation_lte: String
  cooperation_gt: String
  cooperation_gte: String
  cooperation_contains: String
  cooperation_not_contains: String
  cooperation_starts_with: String
  cooperation_not_starts_with: String
  cooperation_ends_with: String
  cooperation_not_ends_with: String
  planningProduction: String
  planningProduction_not: String
  planningProduction_in: [String!]
  planningProduction_not_in: [String!]
  planningProduction_lt: String
  planningProduction_lte: String
  planningProduction_gt: String
  planningProduction_gte: String
  planningProduction_contains: String
  planningProduction_not_contains: String
  planningProduction_starts_with: String
  planningProduction_not_starts_with: String
  planningProduction_ends_with: String
  planningProduction_not_ends_with: String
  releasedBy: String
  releasedBy_not: String
  releasedBy_in: [String!]
  releasedBy_not_in: [String!]
  releasedBy_lt: String
  releasedBy_lte: String
  releasedBy_gt: String
  releasedBy_gte: String
  releasedBy_contains: String
  releasedBy_not_contains: String
  releasedBy_starts_with: String
  releasedBy_not_starts_with: String
  releasedBy_ends_with: String
  releasedBy_not_ends_with: String
  distributedBy: String
  distributedBy_not: String
  distributedBy_in: [String!]
  distributedBy_not_in: [String!]
  distributedBy_lt: String
  distributedBy_lte: String
  distributedBy_gt: String
  distributedBy_gte: String
  distributedBy_contains: String
  distributedBy_not_contains: String
  distributedBy_starts_with: String
  distributedBy_not_starts_with: String
  distributedBy_ends_with: String
  distributedBy_not_ends_with: String
  srcUrl: String
  srcUrl_not: String
  srcUrl_in: [String!]
  srcUrl_not_in: [String!]
  srcUrl_lt: String
  srcUrl_lte: String
  srcUrl_gt: String
  srcUrl_gte: String
  srcUrl_contains: String
  srcUrl_not_contains: String
  srcUrl_starts_with: String
  srcUrl_not_starts_with: String
  srcUrl_ends_with: String
  srcUrl_not_ends_with: String
  range: String
  range_not: String
  range_in: [String!]
  range_not_in: [String!]
  range_lt: String
  range_lte: String
  range_gt: String
  range_gte: String
  range_contains: String
  range_not_contains: String
  range_starts_with: String
  range_not_starts_with: String
  range_ends_with: String
  range_not_ends_with: String
  interactions_some: InteractionWhereInput
  AND: [NendoroidWhereInput!]
}

input NendoroidWhereUniqueInput {
  id: ID
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  interaction(where: InteractionWhereUniqueInput!): Interaction
  interactions(where: InteractionWhereInput, orderBy: InteractionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interaction]!
  interactionsConnection(where: InteractionWhereInput, orderBy: InteractionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InteractionConnection!
  nendoroid(where: NendoroidWhereUniqueInput!): Nendoroid
  nendoroids(where: NendoroidWhereInput, orderBy: NendoroidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nendoroid]!
  nendoroidsConnection(where: NendoroidWhereInput, orderBy: NendoroidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NendoroidConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  interaction(where: InteractionSubscriptionWhereInput): InteractionSubscriptionPayload
  nendoroid(where: NendoroidSubscriptionWhereInput): NendoroidSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  pseudo: String
  email: String!
  avatar: String
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String
  lastName: String
  pseudo: String
  email: String!
  avatar: String
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  pseudo_ASC
  pseudo_DESC
  email_ASC
  email_DESC
  avatar_ASC
  avatar_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  pseudo: String
  email: String!
  avatar: String
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  pseudo: String
  email: String
  avatar: String
  password: String
}

input UserUpdateInput {
  firstName: String
  lastName: String
  pseudo: String
  email: String
  avatar: String
  password: String
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  pseudo: String
  email: String
  avatar: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  pseudo: String
  pseudo_not: String
  pseudo_in: [String!]
  pseudo_not_in: [String!]
  pseudo_lt: String
  pseudo_lte: String
  pseudo_gt: String
  pseudo_gte: String
  pseudo_contains: String
  pseudo_not_contains: String
  pseudo_starts_with: String
  pseudo_not_starts_with: String
  pseudo_ends_with: String
  pseudo_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  pseudo: String
  email: String
}
`
      }
    