import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import TitleRoundedIcon from "@material-ui/icons/TitleRounded";
import ApartmentRoundedIcon from "@material-ui/icons/ApartmentRounded";
import BrushRoundedIcon from "@material-ui/icons/BrushRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import ImageIcon from "@material-ui/icons/Image";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Auth from "../../globalStates/useAuth";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/core/styles";

const handleLogout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
  }
};

const ID = () => {
  const theme = useTheme();
  let currentUser = Auth.useContainer();
  if (currentUser.isAuth) {
    return (
      <>
        <AniLink
          cover
          direction="down"
          bg={theme.palette.primary.main}
          to={`/user/${currentUser.user.pseudo}`}
        >
          <Button
            endIcon={
              <Avatar
                alt={currentUser.user.pseudo}
                src={currentUser.user.avatar}
              />
            }
          >
            {currentUser.user.pseudo}
          </Button>
        </AniLink>

        <Button
          onClick={() => {
            handleLogout();
            currentUser.signout();
            currentUser.setCurrentUser(undefined);
          }}
          startIcon={
            <ExitToAppRoundedIcon
              style={{ fill: theme.palette.primary.contrastText }}
            />
          }
        >
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <AniLink
        cover
        direction="down"
        bg={theme.palette.primary.main}
        to="/signin/"
      >
        <Button
          startIcon={
            <VpnKeyRoundedIcon
              style={{ fill: theme.palette.primary.contrastText }}
            />
          }
        >
          Login
        </Button>
      </AniLink>
    );
  }
};

const Top = () => {
  const theme = useTheme();
  const auth = Auth.useContainer();
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" style={{ zIndex: 5 }}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              sm={3}
            >
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon
                  style={{ fill: theme.palette.primary.contrastText }}
                />
              </IconButton>
              <Typography variant="h5" component="span">
                NendoGO
              </Typography>
            </Grid>
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              sm={6}
            >
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/users/"
              >
                <Button
                  startIcon={
                    <PeopleAltRoundedIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  Users
                </Button>
              </AniLink>
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/nendoroids/"
              >
                <Button
                  startIcon={
                    <ListAltRoundedIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  Nendoroids
                </Button>
              </AniLink>
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/series/"
              >
                <Button
                  startIcon={
                    <TitleRoundedIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  Series
                </Button>
              </AniLink>
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/manufacturers/"
              >
                <Button
                  startIcon={
                    <ApartmentRoundedIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  Manufacturers
                </Button>
              </AniLink>
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/sculptors/"
              >
                <Button
                  startIcon={
                    <BrushRoundedIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  Sculptors
                </Button>
              </AniLink>
              <AniLink
                cover
                direction="down"
                bg={theme.palette.primary.main}
                to="/images/"
              >
                <Button
                  startIcon={
                    <ImageIcon
                      style={{ fill: theme.palette.primary.contrastText }}
                    />
                  }
                >
                  images
                </Button>
              </AniLink>
            </Grid>
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              sm={3}
            >
              <ID auth={auth} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Top;
