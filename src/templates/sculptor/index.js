import React, { useState, useContext } from "react";
import classes from "./style.module.css";
import Carousel from "../../components/carousel/index";
import Card from "../../components/card/nendoroid";
import Layout from "../../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_INTERACTION_LIKE_QUERY,
  GET_INTERACTION_WISH_QUERY,
  GET_INTERACTION_OWN_QUERY
} from "../../apollo/queries";
import { UserContext } from "../../components/layout/index";

const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MadeInAbyss_logo.svg/1200px-MadeInAbyss_logo.svg.png";


const Sculptor = ({ pageContext: { id, name } }) => {
  const currentUser = useContext(UserContext);
  console.log({id, name})

  return (
    <Layout footer={false}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src={imgUrl} alt="dunno" />
        </div>
      </div>
    </Layout>
  );
}

export default Sculptor;