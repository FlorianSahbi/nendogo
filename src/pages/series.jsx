import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/serie";
import { GET_SERIES } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";

const renderCards = series =>
  series.map(({ id, name }) => {
    return (
      <Grid item sm={6} xs={12} style={{ padding: "1em", height: "200px" }}>
        <Card key={id} id={id} name={name} />)
      </Grid>
    );
  });

const SeriesPage = () => {
  const theme = useTheme();
  const [series, setSeries] = useState(null);
  const [name, setName] = useState("Naruto");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_SERIES, {
    variables: { name, orderBy },
    onCompleted: data => setSeries(data.getSeries.series),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <Grid
        container
        spacing={1}
        style={{ background: theme.palette.primary.main, minHeight: "100vh" }}
      >
        {loading && <div style={{ color: "white" }}>Loading...</div>}
        {!loading && series && renderCards(series)}
      </Grid>
    </Layout>
  );
};

export default SeriesPage;
