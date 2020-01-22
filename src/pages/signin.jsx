import React, { useState } from "react";
import SigninForm from "../components/form/signin";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GET_IMAGES } from "../apollo/queries";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
}));

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const renderCardsBacbground = () => {
  const [images, setImages] = useState(null);

  const { error, loading, data } = useQuery(GET_IMAGES, {
    onCompleted: data => {
      const cards = data.getImages.images.map(elem => {
        return {
          img: elem.url,
          title: "oosef",
          author: "ok",
          cols: getRandomIntInclusive(1, 3)
        };
      });
      setImages(cards);
    },
    onError: err => console.log(err)
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={50} className={classes.gridList} cols={4}>
        {!loading &&
          images &&
          images.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        }
      </GridList>
    </div>
  );
};

const SigninPage = () => {
  return (
    <Layout header>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "calc(100vh - 70px)", overflow: "hidden" }}
      >
        <Grid item sm={6}>
          {renderCardsBacbground()}
        </Grid>
        <Grid item sm={6}>
          <SigninForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SigninPage;
