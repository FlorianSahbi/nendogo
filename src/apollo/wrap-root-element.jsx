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

export const darkTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: "#f0e6d2",
        fontFamily: "Raleway",
        "&:hover": {
          color: "#ffb2dd"
        }
      }
    }
  },
  typography: {
    fontFamily: ["Cinzel", "Raleway"].join(","),
    h1: {
      fontSize: 30,
      color: "#f0e6d2"
    },
    h2: {
      fontSize: 24,
      color: "#f0e6d2"
    },
    h6: {
      color: "#f0e6d2"
    },
    subtitle1: {
      fontSize: 14,
      color: "#f0e6d2"
    },
    subtitle2: {
      fontSize: 12,
      color: "#f0e6d2"
    },
    button: {
      color: "#f0e6d2"
    }
  },
  palette: {
    primary: {
      light: "#36393c",
      main: "#101316",
      dark: "#000000",
      contrastText: "#f0e6d2"
    },
    secondary: {
      light: "#ffb2dd",
      main: "#ff80ab",
      dark: "#c94f7c",
      contrastText: "#f0e6d2"
    }
  }
});

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
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
