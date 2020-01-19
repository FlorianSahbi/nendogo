import React, { useEffect } from "react";
const img = "https://farm8.staticflickr.com/7653/16839072620_1a5ca7021f_o.jpg";

import Layout from "../components/layout";
import { useState } from "react";

const IndexPage = () => {

  useEffect(() => {
    return () => {
    };
  });

  return (
    <Layout footer header>
      <section>
        <img alt="bgHeader" src={img} />
      </section>
    </Layout>
  );
};

export default IndexPage;
