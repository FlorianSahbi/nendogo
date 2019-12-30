import React, { useState, useEffect, useContext } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/nendoroid";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../apollo/queries/index";
import { UserContext } from "../components/layout/index";
import { AiOutlineLogout } from "react-icons/ai";

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
        />
      );
    }
  );
  return cards;
};

const NendoroidsPage = () => {
  console.log("render Nendoroids");

  const currentUser = useContext(UserContext);

  const [nendo, setNendo] = useState(null);

  const [getNendoroids, { loading, data }] = useLazyQuery(
    GET_NENDOROIDS_BY_RANGE_QUERY,
    {
      onCompleted: data => {
        setNendo(data);
        console.log(nendo);
      }
    }
  );

  useEffect(() => {
    getNendoroids({ variables: { range: "701-800" } });
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  console.log(data)

  return (
    <Layout header={true}>


      <nav>
        
      </nav>



      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {nendo &&
            nendo.getNendoroidsByRange &&
            renderCards(nendo.getNendoroidsByRange.nendoroids, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export default NendoroidsPage;
