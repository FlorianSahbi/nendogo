import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import Layout from '../../components/layout';
import classes from "./style.module.css";
import Card from "../../components/card";
import { GET_NENDOROIDS_QUERY } from "../../apollo/queries/index";

export default function Nendoroids() {

  const { error, loading, data } = useQuery(GET_NENDOROIDS_QUERY);

  if (error) return <div>Error</div>
  if (loading) return <div>Loading...</div>

  const renderCards = () => {
    const cards = data.getNendoroids.nendoroids.map(({ id, formattedName, number, images }) => {
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
      )
    })
    return cards;
  }

  console.log(data);

  return (
    <Layout>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {renderCards()}
        </div>
      </section>
    </Layout>
  )
}
