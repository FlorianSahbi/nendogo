import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";
import Auth from "../globalStates/useAuth";
import Dial from "../globalStates/useDialog";
import {
  FiltersNendoroids,
  FiltersManufacturers
} from "../globalStates/useFilters";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Cinzel", "Raleway"].join(",")
  }
});

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Auth.Provider>
        <Dial.Provider>
          <FiltersNendoroids.Provider>
            <FiltersManufacturers.Provider>
              <ApolloProvider client={client}>{element}</ApolloProvider>
            </FiltersManufacturers.Provider>
          </FiltersNendoroids.Provider>
        </Dial.Provider>
      </Auth.Provider>
    </MuiThemeProvider>
  );
};
