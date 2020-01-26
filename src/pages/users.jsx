import React, { useState } from "react";
import Layout from "../components/layout";
import Cards from "../components/card/user";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../apollo/graphql/queries";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FiltersUsers } from "../globalStates/useFilters";
import Filters from "../components/filters/index";

const renderCards = users =>
  users.map(({ id, pseudo, avatar }) => (
    <Grid key={`${id}-gridId`} item xl={2} lg={2} md={3} sm={3} sm={4} xs={4}>
      <Cards
        key={`${id}-manufacturerId`}
        id={id}
        pseudo={pseudo}
        avatar={[avatar]}
      />
    </Grid>
  ));

const UsersPage = () => {
  const theme = useTheme();
  const {
    orderBy,
    pseudo,
    skip,
    first,
    setFirst
  } = FiltersUsers.useContainer();

  const [users, setUsers] = useState(null);

  const { error, loading, data } = useQuery(GET_USERS, {
    variables: { pseudo, orderBy, skip, first },
    fetchPolicy: "no-cache",
    onCompleted: data => setUsers(data.getUsers.users),
    onError: error => console.log(error)
  });

  const Pagination = ({ skip, first }) => {
    const handleNext = () => {
      console.log("click next");
      let ok = first + 1;
      setFirst(ok);
    };

    const handlePrevious = () => {
      console.log("click Previous");
      let ok = first - 1;
      setFirst(ok);
    };

    return (
      <Grid
        item
        container
        direct="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        style={{ border: "2px solid pink" }}
      >
        <Grid
          item
          sm={4}
          style={{ border: "2px solid red", height: "100%" }}
          container
          justify="center"
          alignItems="center"
        >
          <Button
            onClick={() => handlePrevious()}
            fullWidth
            style={{
              color: theme.palette.primary.contrastText,
              width: "100%",
              height: "100%",
              border: "2px solid blue"
            }}
          >
            Previous
          </Button>
        </Grid>
        <Grid
          item
          sm={4}
          style={{ border: "2px solid red", height: "100%" }}
          container
          justify="center"
          alignItems="center"
        >
          <Typography
            align="center"
            style={{
              color: theme.palette.primary.contrastText,
              width: "100%",
              border: "2px solid blue"
            }}
          >
            {skip} - {first}
          </Typography>
        </Grid>
        <Grid
          item
          sm={4}
          style={{ border: "2px solid red", height: "100%" }}
          container
          justify="center"
          alignItems="center"
        >
          <Button
            onClick={() => handleNext()}
            fullWidth
            style={{
              color: theme.palette.primary.contrastText,
              width: "100%",
              height: "100%",
              border: "2px solid blue"
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };

  {
    loading && <CircularProgress />;
  }

  return (
    <Layout header>
      <CssBaseline />
      <Grid
        container
        direction="column"
        style={{
          background: theme.palette.primary.main,
          height: "calc(100vh - 60px)",
          border: "5px solid green"
        }}
      >
        <Grid
          container
          item
          sm={12}
          style={{ border: "5px dotted lightblue", flex: 0.1 }}
        >
          <Filters />
        </Grid>
        <Grid
          item
          sm={12}
          container
          direction="row"
          style={{
            border: "5px dotted lightgreen",
            flex: 1,
            overflow: "auto",
            padding: theme.spacing(1)
          }}
        >
          {!loading && users && renderCards(users)}
          {!loading && users && renderCards(users)}
          {!loading && users && renderCards(users)}
          {!loading && users && renderCards(users)}
          {!loading && users && renderCards(users)}
          {!loading && users && renderCards(users)}
        </Grid>
        <Grid
          container
          item
          sm={12}
          style={{ border: "5px dotted lightyellow", flex: 0.1 }}
        >
          <Pagination skip={skip} first={first} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UsersPage;
