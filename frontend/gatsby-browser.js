import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./src/apollo/client";
import Auth from "./src/globalStates/useAuth";
import Dial from "./src/globalStates/useDialog";
import {
  FiltersUsers,
  FiltersNendoroids,
  FiltersSeries,
  FiltersManufacturers,
  FiltersSculptors
} from "./src/globalStates/useFilters";

export const darkTheme = createMuiTheme({
  overrides: {
    a: {
      textDecoration: "unset"
    },
    MuiAvatar: {
      root: {
        border: `2px solid #ffb2dd`,
        transition: "all 0.5s ease",
        "&:hover": {
          border: `3px solid #c94f7c`,
          cursor: "pointer"
        }
      }
    },
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
          <FiltersUsers.Provider>
            <FiltersNendoroids.Provider>
              <FiltersSeries.Provider>
                <FiltersManufacturers.Provider>
                  <FiltersSculptors.Provider>
                    <ApolloProvider client={client}>
                      {element}
                    </ApolloProvider>
                  </FiltersSculptors.Provider>
                </FiltersManufacturers.Provider>
              </FiltersSeries.Provider>
            </FiltersNendoroids.Provider>
          </FiltersUsers.Provider>
        </Dial.Provider>
      </Auth.Provider>
    </MuiThemeProvider>
  );
};
