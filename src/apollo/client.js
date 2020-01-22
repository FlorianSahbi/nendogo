import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import fetch from 'isomorphic-fetch';

const link = createUploadLink({ uri: process.env.NENDOGO_API_URL });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
