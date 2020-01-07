import React, { useState } from "react";
import classes from "./signin.module.css";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_MUTATION } from "../apollo/queries/index";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const nendoStories = [
  "https://lh5.googleusercontent.com/-TzOpjinrBhE/UTlrvrbQs0I/AAAAAAAAA1U/8cmIq__9KoM/s1617/IMG_0539.jpg",
  "https://farm8.staticflickr.com/7653/16839072620_1a5ca7021f_o.jpg",
  "https://mynendoworld.files.wordpress.com/2017/08/img_0307.jpg?w=830",
  "http://mikatan.goodsmile.info/en/wp-content/uploads/-000//1/5a434439ed9f8_2017-12-27-48288.jpg",
  "https://static.myfigurecollection.net/upload/pictures/2014/10/16/1120890.jpeg",
  "https://live.staticflickr.com/1957/44819518934_62037c288f_b.jpg"
];

const SigninPage = () => {
  console.log("render signin");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = message => {
    if (message === "GraphQL error: No such user found") {
      setOpen(true);
    }
    if (message === "GraphQL error: Invalid password") {
      setOpen2(true);
    } else {
      console.log("jsp");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  const [signin] = useMutation(SIGNIN_MUTATION, {
    onCompleted: data => {
      const currentUser = {
        token: data.login.token,
        id: data.login.user.id,
        pseudo: data.login.user.pseudo,
        avatar: data.login.user.avatar
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "http://localhost:8000/nendoroids";
      }
    },
    onError: error => {
      console.log(error.message);
      handleClick(error.message);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    signin({ variables: { pseudo, password } });
    setPseudo("");
    setPassword("");
  };

  const handleInputPseudo = e => {
    setPseudo(e.target.value);
  };

  const handleInputPassword = e => {
    setPassword(e.target.value);
  };

  const renderCardsBacbground = () => {
    const cards = nendoStories.map(elem => {
      return (
        <div style={{ height: "200px", width: "100%", padding: "5px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={elem}
            alt="ok"
          />
        </div>
      );
    });

    return (
      <div
        style={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
          display: "flex"
        }}
      >
        <div style={{ flex: "auto" }} className={classes.column}>
          {cards}
        </div>
        <div
          style={{ flex: "auto", transform: "translateY(-240px)" }}
          className={classes.column}
        >
          {cards}
        </div>
        <div style={{ flex: "auto" }} className={classes.column}>
          {cards}
        </div>
        <div
          style={{ flex: "auto", transform: "translateY(-180px)" }}
          className={classes.column}
        >
          {cards}
        </div>
      </div>
    );
  };

  return (
    <section className={classes.signUpContainer}>
      <div className={classes.wrapper}>
        <div className={classes.leftPanel}>{renderCardsBacbground()}</div>
        <div className={classes.rightPanel}>
          <form onSubmit={handleSubmit}>
            <h2
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "'Cinzel",
                fontSize: "1.5em"
              }}
            >
              Sign in
            </h2>
            <input
              type="text"
              value={pseudo}
              onChange={handleInputPseudo}
              placeholder="Type your pseudo"
            />
            <input
              type="password"
              value={password}
              onChange={handleInputPassword}
              placeholder="Type your password"
            />
            <input type="submit" value="signin" />
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} color="error">
          Cet utilisateur n'existe pas.
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} color="error">
          Mauvaise password.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default SigninPage;
