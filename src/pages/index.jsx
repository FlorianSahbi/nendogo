import React, { useEffect } from "react";
import classes from "./index.module.css";
const img = "https://farm8.staticflickr.com/7653/16839072620_1a5ca7021f_o.jpg";

import Layout from "../components/layout";
import { useState } from "react";

const IndexPage = () => {
  console.log("render Index");

  useEffect(() => {
    console.log("did mount");
    return () => {
      console.log("unmount");
    };
  });

  return (
    <Layout footer header>
      <section className={classes.bg}>
        <img alt="bgHeader" src={img} />
      </section>
    </Layout>
  );
};

export default IndexPage;
