import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import Layout from "../../components/layout";
import classes from "./style.module.css";
import Card from "../../components/card";
import { GET_NENDOROIDS_QUERY } from "../../apollo/queries/index";
import { UserContext } from "../../components/layout/index";

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      [
        ...interactions.filter(
          e => e.user.id === currentUser.id && e.type === "LIKE"
        )
      ].length > 0;

      return (
        <Card
          key={id}
          id={id}
          name={formattedName}
          number={number}
          images={images}
          isLiked={
            [
              ...interactions.filter(
                e => e.user.id === currentUser.id && e.type === "LIKE"
              )
            ].length > 0
          }
          isWished={
            [
              ...interactions.filter(
                e => e.user.id === currentUser.id && e.type === "WISH"
              )
            ].length > 0
          }
          isOwned={
            [
              ...interactions.filter(
                e => e.user.id === currentUser.id && e.type === "OWN"
              )
            ].length > 0
          }
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

  return (
    <Layout>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {renderCards(nendoroids, currentUser)}
        </div>
      </section>
    </Layout>
  );
}
