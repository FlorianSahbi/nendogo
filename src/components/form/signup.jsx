import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_MUTATION } from "../../apollo/queries/index";
import Auth from "../../globalStates/useAuth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignupForm = () => {
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
  const [signup] = useMutation(SIGNUP_MUTATION, {
    onCompleted: data => {
      const currentUser = {
        token: data.signup.token,
        id: data.signup.user.id,
        pseudo: data.signup.user.pseudo,
        avatar: data.signup.user.avatar
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("isLoggedIn", "true");
        auth.setCurrentUser(currentUser);
        // window.location.href = "http://localhost:8000/nendoroids";
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
          email: "",
          password: ""
        }}
        validationSchema={Yup.object({
          pseudo: Yup.string()
            .min(3, "Must be at least 3 characters")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
        })}
        onSubmit={({ pseudo, password, email }, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            signup({ variables: { pseudo, password, email } });
          }, 400);
        }}
      >
        <Form>
          <h2
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "'Cinzel",
              fontSize: "1.5em"
            }}
          >
            Sign up
          </h2>
          <MyTextInput
            label="Pseudo"
            name="pseudo"
            type="text"
            placeholder="Pseudo"
          />
          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Signup</button>
        </Form>
      </Formik>
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
    </>
  );
};

export default SignupForm;
