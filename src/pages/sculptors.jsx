import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/serie";
import { GET_SCULPTORS_QUERY } from "../apollo/queries/index";
import { UserContext } from "../components/layout/index";

import {CounterDisplay} from "../apollo/wrap-root-element";

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(({ id, name }) => {
    return <Card key={id} id={id} name={name} number={"0"} images={"o"} />;
  });
  return cards;
};

const SculptorsPage = () => {
  console.log("render Sculptor");

  const currentUser = useContext(UserContext);

  const [sculptors, setSculptors] = useState(null);

  const [getSculptors, { loading, data }] = useLazyQuery(GET_SCULPTORS_QUERY, {
    onCompleted: data => {
      setSculptors(data);
    }
  });

  useEffect(() => {
    getSculptors();
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <Layout header={true}>
       <CounterDisplay />
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {sculptors &&
            sculptors.getSculptors &&
            renderCards(sculptors.getSculptors.sculptors, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export default SculptorsPage;
