import React, { useState } from "react";
import Layout from "../components/layout";
import Cards from "../components/card/nendoroid";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../apollo/queries/index";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/styles";

import Auth from "../globalStates/useAuth";
import { FiltersNendoroids } from "../globalStates/useFilters";

import Filters from "../components/filters/index";

const isLikedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "LIKE")][0];
  if (b) b = b.id;
  if (
    [...i.filter(e => e.user.id === userId && e.type === "LIKE")].length > 0
  ) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const isWishedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "WISH")][0];
  if (b) b = b.id;
  if (
    [...i.filter(e => e.user.id === userId && e.type === "WISH")].length > 0
  ) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const isOwnedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "OWN")][0];
  if (b) b = b.id;
  if ([...i.filter(e => e.user.id === userId && e.type === "OWN")].length > 0) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const handleLoading = () => {
  const imgs = [...document.querySelectorAll(`#con img`)];
  const tab = [...imgs.filter(i => i.complete === false)];
  if (tab.length > 0) {
    return true;
  }
  return false;
};

const renderCards = (nendoroids, currentUser) => {
  let currentUserId = "à";
  if (currentUser) {
    currentUserId = currentUser.id;
  } else {
    currentUserId = "k";
  }
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      return (
        <Grid
          key={`${id}-gridId`}
          item
          xl={2}
          lg={2}
          md={3}
          sm={3}
          sm={4}
          xs={6}
        >
          <Cards
            key={`${id}-nendoId`}
            id={id}
            name={formattedName}
            number={number}
            images={images}
            isLiked={isLikedBy(interactions, currentUserId)}
            isLoaded={handleLoading}
          />
        </Grid>
      );
    }
  );
  return cards;
};

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
      <Filters />
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={2}
        style={{
          padding: theme.spacing(2),
          background: theme.palette.primary.main
        }}
      >
        {!loading && nens && renderCards(nens)}
      </Grid>
    </Layout>
  );
};

export default NendoroidsPage;
