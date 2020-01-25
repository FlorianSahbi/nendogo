import React, { useState } from "react";
import Layout from "../components/layout";
import Cards from "../components/card/nendoroid";
import { useQuery } from "@apollo/react-hooks";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../apollo/queries/index";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Auth from "../globalStates/useAuth";
import { FiltersNendoroids } from "../globalStates/useFilters";
import Filters from "../components/filters/index";

const renderCards = nendoroids =>
  nendoroids.map(({ id, formattedName, number, images }) => (
    <Grid key={`${id}-gridId`} item xl={2} lg={2} md={3} sm={3} sm={4} xs={4}>
      <Cards
        key={`${id}-nendoroidsId`}
        id={id}
        name={formattedName}
        number={number}
        images={images}
      />
    </Grid>
  ));

const NendoroidsPage = props => {
  const theme = useTheme();
  const {
    range: { min, max },
    orderBy,
    name
  } = FiltersNendoroids.useContainer();

  const auth = Auth.useContainer();
  const [nens, setNens] = useState(null);

  const { error, loading, data } = useQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    variables: { min, max, orderBy, name },
    onCompleted: data => {
      setNens(data.getNendoroidsByRange.nendoroids);
    },
    onError: error => {}
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
        {!loading && nens && renderCards(nens)}
      </Grid>
    </Layout>
  );
};

export default NendoroidsPage;
