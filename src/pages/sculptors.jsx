import React, { useContext } from "react";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/sculptor";
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

  const currentUser = useContext(UserContext);

  return (
    <Layout header={true}>
      <section
        style={{ background: "#121415", minHeight: "100vh" }}
        className={classes.nendoroidsContainer}
      >
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
      sculptors(orderBy: name_ASC) {
        name
        id
      }
    }
  }
`;

export default SculptorsPage;
