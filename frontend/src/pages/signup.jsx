import React from "react";
import SignupForm from "../components/form/signup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/layout";

const SignupPage = () => {
  return (
    <Layout header>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <SignupForm />
      </Grid>
    </Layout>
  );
};

export default SignupPage;
