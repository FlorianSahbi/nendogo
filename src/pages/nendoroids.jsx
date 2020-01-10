import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/nendoroid";
import { UserContext } from "../components/layout/index";
import { graphql } from "gatsby";
import Skeleton from "@material-ui/lab/Skeleton";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../apollo/queries/index";

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
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      return (
        <Card
          key={id}
          id={id}
          name={formattedName}
          number={number}
          images={images}
          isLiked={isLikedBy(interactions, currentUser.id)}
          isLoaded={handleLoading}
        />
      );
    }
  );
  return cards;
};

const NendoroidsPage = (props) => {

  console.log(props)
  const getByRange = range => {
    lazyNen({ variables: { range } });
  };

  const renderFilter = () => {
    return (
      <div>
        <button onClick={() => getByRange("000-100")}>000-100</button>
        <button onClick={() => getByRange("101-200")}>101-200</button>
        <button onClick={() => getByRange("201-300")}>201-300</button>
        <button onClick={() => getByRange("301-400")}>301-400</button>
        <button onClick={() => getByRange("401-500")}>401-500</button>
        <button onClick={() => getByRange("501-600")}>501-600</button>
        <button onClick={() => getByRange("601-70")}>601-70</button>
        <button onClick={() => getByRange("701-800")}>701-800</button>
        <button onClick={() => getByRange("801-900")}>801-900</button>
        <button onClick={() => getByRange("901-1000")}>901-1000</button>
        <button onClick={() => getByRange("1001-1100")}>1001-1100</button>
        <button onClick={() => getByRange("1101-1200")}>1101-1200</button>
        <button onClick={() => getByRange("1201-1300")}>1201-1300</button>
      </div>
    );
  };

  const currentUser = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [nens, setNens] = useState(null);

  const [lazyNen] = useLazyQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    onCompleted: data => setNens(data.getNendoroidsByRange.nendoroids),
    fetchPolicy: "no-cache"
  });

  const { error, loading, data } = useQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    variables: { range: "901-1000" },
    onCompleted: data => {
      setNens(data.getNendoroidsByRange.nendoroids);
    },
    onError: error => {}
  });

  return (
    <Layout header={true}>
      <section
        style={{ background: "#121415", minHeight: "100vh" }}
        className={classes.nendoroidsContainer}
      >
        {renderFilter()}
        <div id="con" className={classes.wrapper}>
          {nens && renderCards(nens, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      nendoroids(orderBy: number_ASC) {
        id
        formattedName
        number
        images
        interactions {
          id
          type
          user {
            pseudo
            id
            avatar
          }
        }
      }
    }
  }
`;

export default NendoroidsPage;
