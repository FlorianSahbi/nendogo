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

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

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
      <Grid item sm={12} container justify="flex-end">
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
      </Grid>
    );
  } else {
    return (
      <Grid item sm={12}>
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
      </Grid>
    );
  }
};

const Header = () => {
  const theme = useTheme();
  const auth = Auth.useContainer();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[{ label: "Users", link: "/users/" }].map(({ label, link }, index) => (
          <AniLink
            cover
            direction="down"
            bg={theme.palette.primary.main}
            to={link}
          >
            <ListItem button key={label}>
              <ListItemIcon>
                <PeopleAltRoundedIcon
                  style={{ fill: theme.palette.primary.main }}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </AniLink>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            label: "Nendoroids",
            link: "/nendoroids/",
            icon: <ListAltRoundedIcon color="primary" />
          },
          {
            label: "Series",
            link: "/series/",
            icon: <TitleRoundedIcon color="primary" />
          },
          {
            label: "Manufacturers",
            link: "/manufacturers/",
            icon: <ApartmentRoundedIcon color="primary" />
          },
          {
            label: "Sculptors",
            link: "/sculptors/",
            icon: <BrushRoundedIcon color="primary" />
          }
        ].map(({ label, link, icon }, index) => (
          <AniLink
            cover
            direction="down"
            bg={theme.palette.primary.main}
            to={link}
          >
            <ListItem button key={label}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </AniLink>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
      <AppBar position="sticky" style={{ zIndex: 5 }}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid container justify="flex-start" alignItems="center" item xs={3}>
              <Grid item xs={2}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer("left", true)}
                >
                  <MenuIcon
                    style={{ fill: theme.palette.primary.contrastText }}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" component="span">
                  NendoGO
                </Typography>
              </Grid>
              <Grid item xs={8} />
            </Grid>
            <Hidden mdDown>
              <Grid container justify="space-evenly" alignItems="center" item xs={6}>
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
            </Hidden>
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              direct="row"
              xs={3}
              item
            >
              <ID auth={auth} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
