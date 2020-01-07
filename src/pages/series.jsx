import React, { useContext } from "react";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/serie";
import { UserContext } from "../components/layout/index";
import { graphql } from "gatsby";

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(({ id, name }) => {
    return <Card key={id} id={id} name={name} number={"0"} images={"o"} />;
  });
  return cards;
};

const SeriesPage = ({
  data: {
    prisma: { series }
  }
}) => {
  console.log("render Series");

  const currentUser = useContext(UserContext);

  console.log(series);

  return (
    <Layout header={true}>
      <section
        style={{ background: "#121415", minHeight: "100vh" }}
        className={classes.nendoroidsContainer}
      >
        <div className={classes.wrapper}>
          {renderCards(series, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      series(orderBy: name_ASC) {
        name
        id
      }
    }
  }
`;

export default SeriesPage;
