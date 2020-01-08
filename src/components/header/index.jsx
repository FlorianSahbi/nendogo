import React from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h1 className={classes.title}>
            <Link to="/">NendoGO</Link>
          </h1>
        </div>

        <div className={classes.column}>
          <Link to="/users/">Users </Link>
          <Link to="/nendoroids/">Nendoroids </Link>
          <Link to="/series/">Series </Link>
          <Link to="/manufacturers/">Manufacturers </Link>
          <Link to="/sculptors/">Sculptors </Link>
        </div>

        <div className={classes.column}>
          <div className={classes.idContainer}>
            <Link to="/signin/">Login </Link>
            {/* <div className={classes.idWrapper}>{renderUserInformation()}</div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
