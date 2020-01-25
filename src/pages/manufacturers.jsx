import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/manufacturer";
import { GET_MANUFACTURERS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

const renderCards = manufacturers =>
  manufacturers.map(({ id, name }) => (
    <Grid key={`${id}-gridId`} item xl={3} lg={3} md={3} sm={3} sm={4} xs={4}>
      <Card key={`${id}-manufacturerId`} id={id} name={name} />
    </Grid>
  ));

const ManufacturersPage = () => {
  const theme = useTheme();
  const [manufacturers, setManufacturers] = useState(null);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_MANUFACTURERS, {
    variables: { name, orderBy },
    onCompleted: data => setManufacturers(data.getManufacturers.manufacturers),
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
        {loading && (
          <CircularProgress style={{ color: theme.palette.secondary.main }} />
        )}
        {!loading && manufacturers && renderCards(manufacturers)}
      </Grid>
    </Layout>
  );
};

export default ManufacturersPage;
