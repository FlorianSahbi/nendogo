import React, { useState, useContext } from "react";
import classes from "./style.module.css";
import Carousel from "../../components/carousel/index";
import Card from "../../components/card/nendoroid";
import Layout from "../../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import { graphql } from "gatsby"

import {
  GET_INTERACTION_LIKE_QUERY,
  GET_INTERACTION_WISH_QUERY,
  GET_INTERACTION_OWN_QUERY,
  GEt_NENDO_MANU_QUERY
} from "../../apollo/queries";
import { UserContext } from "../../components/layout/index";



const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MadeInAbyss_logo.svg/1200px-MadeInAbyss_logo.svg.png";


const Manufacturer = ({ data: { prisma: { nendoroids } }, pageContext: { name, id } }) => {

  console.log("render manu");
  console.log({ nendoroids });

   const query = graphql`
{
  prisma {
    nendoroids(where: {manufacturer_contains: name}) {
      id
      formattedName
      number
      images
    }
  }
}
`


  const currentUser = useContext(UserContext);


  return (
    <Layout footer={false}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {/* <img src={imgUrl} alt="dunno" /> */}
          <h1 style={{ color: "white" }}>{name}</h1>
          {nendoroids.map(e => {
            return (
              <div className={classes.bla}>
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.formattedName}
                  number={e.number}
                  images={e.images}
                />
              </div>
            )
          })
          }
        </div>
      </div>
    </Layout>
  );
}



export default Manufacturer;