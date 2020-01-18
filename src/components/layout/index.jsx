import React from "react";
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

const DialogNendoroids = () => {
  const dial = Dial.useContainer();
  return (
    <Dialog
      open={dial.open}
      onClose={dial.closeDial}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        Want to share your love ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
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
  );
};

export default function Layout({ children, header, footer }) {
  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
      <DialogNendoroids />
    </>
  );
}
