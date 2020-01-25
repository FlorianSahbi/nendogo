import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card/manufacturer";
import { GET_MANUFACTURERS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const renderCards = manufacturers =>
  manufacturers.map(({ id, name }) => {
    return (
      <Grid item md={3} sm={6} xs={12} style={{ padding: "1em" }}>
        <Card key={id} id={id} name={name} />
      </Grid>
    );
  });

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
      <Grid container style={{ background: theme.palette.primary.main }}>
        {loading && <CircularProgress />}
        {!loading && manufacturers && renderCards(manufacturers)}
      </Grid>
    </Layout>
  );
};

export default ManufacturersPage;
