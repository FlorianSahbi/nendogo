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

const SculptorsPage = ({
  data: {
    prisma: { sculptors }
  }
}) => {
  console.log("render Sculptor");

  const currentUser = useContext(UserContext);

  return (
    <Layout header={true}>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {renderCards(sculptors, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      sculptors(orderBy: name_ASC, skip: 0, first: 10) {
        name
        id
      }
    }
  }
`;

export default SculptorsPage;
