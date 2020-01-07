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

const Header = () => {
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
          <AniLink cover direction="down" bg="#FFC0CC" to="/signin/">
            <Button startIcon={<VpnKeyRoundedIcon />}>Login</Button>
          </AniLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
