import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";
import Auth from "../globalStates/useAuth";
import Dial from "../globalStates/useDialog";

export const wrapRootElement = ({ element }) => {
  return (
    <Auth.Provider>
      <Dial.Provider>
        <ApolloProvider client={client}>{element}</ApolloProvider>
      </Dial.Provider>
    </Auth.Provider>
  );
};
