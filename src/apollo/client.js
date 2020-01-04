import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import fetch from 'isomorphic-fetch';

const link = createUploadLink({ uri: "http://localhost:4000" });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
