import React from "react";
import Layout from "../components/layout";
import classes from "./sculptors.module.css";
import Card from "../components/card/sculptor";
import { graphql } from "gatsby";

const renderCards = sculptors =>
  sculptors.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const SculptorsPage = ({
  data: {
    prisma: { sculptors }
  }
}) => {
  return (
    <Layout header={true}>
      <section className={classes.sculptorsPageContainer}>
        <div className={classes.wrapper}>
          {renderCards(sculptors.slice(0, 52))}
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
