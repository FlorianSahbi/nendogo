import React from "react";
import SigninForm from "../components/form/signin";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/layout";

const SigninPage = () => {
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
        <SigninForm />
      </Grid>
    </Layout>
  );
};

export default SigninPage;
