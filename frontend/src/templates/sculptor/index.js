import React from "react";
import Layout from "../../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import { TEST_SCULPTOR } from "../../apollo/queries/index";
import Card from "../../components/card/nendoroid/index";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const Sculptor = ({ pageContext: { name } }) => {
  const theme = useTheme();

  const { error, loading, data } = useQuery(TEST_SCULPTOR, {
    fetchPolicy: "no-cache",
    variables: { "name": name },
    onCompleted: data => console.log(data)
  })

  const renderCards = (sculptors) => {
    return sculptors.map(e => {
      return (
        <Grid
          item
          xl={2}
          lg={2}
          md={3}
          sm={3}
          xs={4}
        >
          <a href={`../../nendoroid/${e.formattedName}`}>
            <Card images={e.images} name={e.formattedName} key={e.id} number={e.number} isLoaded={() => { }} />
          </a>
        </Grid>
      )
    })
  }

  if (loading) return <CircularProgress />;

  if (data) {
    const { getNendoroidsBySculptor: { nendoroids } } = data;
    return (
      <Layout header>
        <Grid container alignContent="flex-start" style={{ background: theme.palette.primary.main, minHeight: "calc(100vh - 50px)", padding: "1em" }}>
          <Grid item sm={12}>
            <Typography gutterBottom variant="h2" color="textPrimary" style={{ color: theme.palette.primary.contrastText }}>
              Sculptor : {name} ({nendoroids.length} items)
            </Typography>
          </Grid>
          <Grid item container spacing={1} sm={12} alignContent="flex-start">
            {nendoroids && renderCards(nendoroids)}
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default Sculptor;
