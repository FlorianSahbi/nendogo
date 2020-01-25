import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/sculptor";
import { GET_SCULPTORS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const renderCards = sculptors => {
  const theme = useTheme();
  return sculptors.map(({ id, name }) => {
    return (
      <Grid item md={3} sm={6} xs={12} style={{ padding: "1em" }}>
        <Card key={id} id={id} name={name} />
      </Grid>
    );
  });
};

const SculptorsPage = () => {
  const theme = useTheme();
  const [sculptors, setSculptors] = useState(null);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_SCULPTORS, {
    variables: { name, orderBy },
    onCompleted: data => setSculptors(data.getSculptors.sculptors),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      {loading && <CircularProgress />}
      <Grid
        container
        spacing={1}
        style={{ background: theme.palette.primary.main }}
      >
        {!loading && sculptors && renderCards(sculptors)}
      </Grid>
    </Layout>
  );
};

export default SculptorsPage;
