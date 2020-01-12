import React from "react";
import "./reset.css";
import classes from "./style.module.css";
import { IconContext } from "react-icons";
import Footer from "../footer/index";
import Header from "../header/index";
import { Link } from "gatsby";

import Dial from "../../globalStates/useDialog";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Layout({ children, header, footer }) {
  const dial = Dial.useContainer();

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      {header && <Header />}
      <section className={classes.bodyContainer}>
        <div className={classes.bodyWrapper}>{children}</div>
      </section>
      {footer && <Footer />}

      <Dialog
        open={dial.open}
        onClose={dial.closeDial}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To start to share your preferences with people you first need to be
            loggedin by creating an account or login to an existing accout.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dial.closeDial} color="primary">
            Back
          </Button>
          <Button onClick={dial.closeDial} color="primary" autoFocus>
            <Link to={"signin/"}>Authenticatication page</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </IconContext.Provider>
  );
}
