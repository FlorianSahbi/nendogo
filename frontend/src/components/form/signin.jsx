import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_MUTATION } from "../../apollo/queries/index";
import Auth from "../../globalStates/useAuth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SigninForm = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = message => {
    if (message === "GraphQL error: No such user found") {
      setOpen(true);
    }
    if (message === "GraphQL error: Invalid password") {
      setOpen2(true);
    } else {
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

  const auth = Auth.useContainer();

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
        auth.setCurrentUser(currentUser);
        // window.location.href = "http://localhost:8000";
        window.location.href = "https://nendogo.com/nendoroids";
      }
    },
    onError: error => {
      handleClick(error.message);
    }
  });

  return (
    <>
      <Formik
        initialValues={{
          pseudo: "",
          password: ""
        }}
        validationSchema={Yup.object({
          pseudo: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required")
        })}
        onSubmit={({ pseudo, password }, { setSubmitting }) => {
          setTimeout(() => {
            signin({ variables: { pseudo, password } });
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Grid item>
            <Typography
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "1.5em"
              }}
            >
              Sign in
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              New user ?<a href="/signup/">Create an account</a>
            </Typography>
          </Grid>
          <Grid item>
            <MyTextInput label="Pseudo" name="pseudo" type="text" />
          </Grid>
          <Grid item>
            <MyTextInput label="Password" name="password" type="password" />
          </Grid>
          <Grid item>
            <Button fullWidth type="submit" color="primary">
              Submit
            </Button>
          </Grid>
        </Form>
      </Formik>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} color="error">
          This user does not exist.
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} color="error">
          Password or email does not exist.
        </Alert>
      </Snackbar>
    </>
  );
};

export default SigninForm;
