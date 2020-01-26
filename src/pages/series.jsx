import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/serie";
import { GET_SERIES } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import { FiltersSeries } from "../globalStates/useFilters";
import Filters from "../components/filters/index";

const renderCards = series =>
  series.map(({ id, name }) => (
    <Grid key={`${id}-gridId`} item xl={3} lg={3} md={3} sm={3} sm={4} xs={4}>
      <Card key={`${id}-serieId`} id={id} name={name} />
    </Grid>
  ));

const SeriesPage = () => {
  const theme = useTheme();
  const {
    orderBy,
    name
  } = FiltersSeries.useContainer();
  const [series, setSeries] = useState(null);

  const { error, loading, data } = useQuery(GET_SERIES, {
    variables: { name, orderBy },
    onCompleted: data => setSeries(data.getSeries.series),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <CssBaseline />
      <Grid
        container
        direction="row"
        alignItems="stretch"
        style={{
          background: theme.palette.primary.main,
          padding: theme.spacing(1),
          minHeight: "calc(100vh - 60px)"
        }}
      >
        <Filters />
        {loading && (
          <CircularProgress style={{ fill: theme.palette.secondary.main }} />
        )}
        {!loading && series && renderCards(series)}
      </Grid>
    </Layout>
  );
};

export default SeriesPage;
