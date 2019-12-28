import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import Layout from "../../components/layout";
import classes from "./style.module.css";
import Card from "../../components/card";
import { GET_NENDOROIDS_QUERY } from "../../apollo/queries/index";
import { UserContext } from "../../components/layout/index";

const renderCards = nendoroids => {
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      return (
        <Card
          key={id}
          id={id}
          name={formattedName}
          number={number}
          images={images}
          isLiked={false}
          isWished={false}
          isOwned={false}
        />
      );
    }
  );
  return cards;
};

export default function Nendoroids() {
  const currentUser = useContext(UserContext);
  const { error, loading, data } = useQuery(GET_NENDOROIDS_QUERY);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  const {
    getNendoroids: { nendoroids }
  } = data;

  console.log(currentUser);

  return (
    <Layout>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>{renderCards(nendoroids)}</div>
      </section>
    </Layout>
  );
}
