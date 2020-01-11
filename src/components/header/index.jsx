import React from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import TitleRoundedIcon from "@material-ui/icons/TitleRounded";
import ApartmentRoundedIcon from "@material-ui/icons/ApartmentRounded";
import BrushRoundedIcon from "@material-ui/icons/BrushRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import Avatar from "@material-ui/core/Avatar";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import ImageIcon from '@material-ui/icons/Image';

import Auth from "../../globalStates/useAuth";

const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.setItem("isLoggedIn", "false");
};

const ID = () => {
  let currentUser = Auth.useContainer();
  if (currentUser.isAuth) {
    return (
      <>
        <Button startIcon={<PersonRoundedIcon />}>
          <AniLink
            cover
            direction="down"
            bg="#FFC0CC"
            to={`/user/${currentUser.user.pseudo}`}
          >
            {currentUser.user.pseudo}
          </AniLink>
        </Button>
        <Avatar alt={currentUser.user.pseudo} src={currentUser.user.avatar} />
        <Button
          onClick={() => {
            handleLogout();
            currentUser.signout();
            currentUser.setCurrentUser(undefined);
          }}
          startIcon={<ExitToAppRoundedIcon />}
        >
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <AniLink cover direction="down" bg="#FFC0CC" to="/signin/">
        <Button startIcon={<VpnKeyRoundedIcon />}>Login</Button>
      </AniLink>
    );
  }
};

const Header = () => {
  const auth = Auth.useContainer();
  return (
    <header className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h1 className={classes.title}>
            <Link to="/">NendoGO</Link>
          </h1>
          <AniLink cover direction="down" bg="#FFC0CC" to="/users/">
            <Button startIcon={<PeopleAltRoundedIcon />}>Users</Button>
          </AniLink>
          <AniLink cover direction="down" bg="#FFC0CC" to="/nendoroids/">
            <Button startIcon={<ListAltRoundedIcon />}>Nendoroids</Button>
          </AniLink>
          <AniLink cover direction="down" bg="#FFC0CC" to="/series/">
            <Button startIcon={<TitleRoundedIcon />}>Series</Button>
          </AniLink>
          <AniLink cover direction="down" bg="#FFC0CC" to="/manufacturers/">
            <Button startIcon={<ApartmentRoundedIcon />}>Manufacturers</Button>
          </AniLink>
          <AniLink cover direction="down" bg="#FFC0CC" to="/sculptors/">
            <Button startIcon={<BrushRoundedIcon />}>Sculptors</Button>
          </AniLink>
          <AniLink cover direction="down" bg="#FFC0CC" to="/images/">
            <Button startIcon={<ImageIconfig />}>images</Button>
          </AniLink>
          <Button
            onClick={() => auth.getCurrentUser()}
            startIcon={<ExitToAppRoundedIcon />}
          >
            info
          </Button>
          <ID auth={auth} />
        </div>
      </div>
    </header>
  );
};

export default Header;
