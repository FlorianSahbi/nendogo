import React from "react";
import Layout from "../components/layout";
import classes from "./manufacturers.module.css";
import Card from "../components/card/manufacturer";
import { graphql } from "gatsby";

const renderCards = manufacturers =>
  manufacturers.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const ManufacturersPage = ({
  data: {
    prisma: { manufacturers }
  }
}) => {
  return (
    <Layout header={true}>
      <section className={classes.manufacturersPageContainer}>
        <div className={classes.wrapper}>
          {renderCards(manufacturers.slice(0, 902))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      manufacturers(orderBy: name_ASC) {
        name
        id
      }
    }
  }
`;

export default ManufacturersPage;
