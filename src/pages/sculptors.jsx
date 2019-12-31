import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/serie";
import { GET_SCULPTORS_QUERY } from "../apollo/queries/index";
import { UserContext } from "../components/layout/index";

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(({ id, name }) => {
    return <Card key={id} id={id} name={name} number={"0"} images={"o"} />;
  });
  return cards;
};

const SculptorsPage = () => {
  console.log("render Series");

  const currentUser = useContext(UserContext);

  const [sculptors, setSculptors] = useState(null);

  const [getSculptors, { loading, data }] = useLazyQuery(GET_SCULPTORS_QUERY, {
    onCompleted: data => {
      setSculptors(data);
      console.log(serie);
    }
  });

  useEffect(() => {
    getSculptors();
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  console.log(data);

  return (
    <Layout header={true}>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {sculptor &&
            sculptors.getSculptors &&
            renderCards(sculptor.getSculptors.sculptors, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export default SculptorsPage;
