import React, { useState } from "react";
import Layout from "../components/layout";
import Cards from "../components/card/user";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../apollo/graphql/queries";
import { CssBaseline, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const renderCards = userArray => {
  return userArray.map(({id, pseudo, avatar}) => (
    <Grid key={`${id}-gridId`} item xl={2} lg={2} md={3} sm={3} sm={4} xs={6}>
      <Cards
        key={id}
        id={id}
        pseudo={pseudo}
        avatar={[avatar]}
      />
    </Grid>
  ));
};

const UsersPage = () => {
  const theme = useTheme();
  const [pseudo, setPseudo] = useState("");
  const [orderBy, setOrderBy] = useState("pseudo_ASC");
  const [users, setUsers] = useState(null);
  console.log(users);

  const { error, loading, data } = useQuery(GET_USERS, {
    variables: { pseudo, orderBy },
    onCompleted: data => setUsers(data.getUsers.users),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <CssBaseline />
      {loading && <div style={{ color: "white" }}>Loading...</div>}
      <Grid
        container
        spacing={1}
        style={{ background: theme.palette.primary.main, minHeight: "100vh", padding: "1em" }}
      >
        {!loading && users && renderCards(users)}
      </Grid>
    </Layout>
  );
};

export default UsersPage;
