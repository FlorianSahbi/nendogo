import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";
import Auth from "../globalStates/useAuth";

export const wrapRootElement = ({ element }) => (
  <Auth.Provider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </Auth.Provider>
);
