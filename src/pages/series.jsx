import React from "react";
import Layout from "../components/layout";
import classes from "./series.module.css";
import Card from "../components/card/serie";
import { graphql } from "gatsby";

const renderCards = series =>
  series.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const SeriesPage = ({
  data: {
    prisma: { series }
  }
}) => {
  return (
    <Layout header={true}>
      <section className={classes.seriesPageContainer}>
        <div className={classes.wrapper}>
          {renderCards(series.slice(0, 622))}
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
