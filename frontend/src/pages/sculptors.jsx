import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/sculptor";
import { GET_SCULPTORS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import { FiltersSculptors } from "../globalStates/useFilters";
import Filters from "../components/filters/index";

const renderCards = sculptors =>
  sculptors.map(({ id, name }) => (
    <Grid key={`${id}-gridId`} item xl={3} lg={3} md={3} sm={3} sm={4} xs={4}>
      <Card key={`${id}-sculptorId`} id={id} name={name} />
    </Grid>
  ));

const SculptorsPage = () => {
  const theme = useTheme();
  const {
    orderBy,
    name
  } = FiltersSculptors.useContainer();
  const [sculptors, setSculptors] = useState(null);

  const { error, loading, data } = useQuery(GET_SCULPTORS, {
    variables: { name, orderBy },
    onCompleted: data => setSculptors(data.getSculptors.sculptors),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <CssBaseline />
      <Grid
        container
        style={{
          background: theme.palette.primary.main,
          padding: theme.spacing(1),
          minHeight: "calc(100vh - 60px)"
        }}
      >
        <Filters />
        {loading && <CircularProgress />}
        {!loading && sculptors && renderCards(sculptors)}
      </Grid>
    </Layout>
  );
};

export default SculptorsPage;
