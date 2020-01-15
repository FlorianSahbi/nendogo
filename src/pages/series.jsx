import React, { useState } from "react";
import classes from "./series.module.css";
import Layout from "../components/layout";
import Card from "../components/card/serie";
import SeriesFiltersForm from "../components/form/seriesFilters";
import { GET_SERIES } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const renderCards = series =>
  series.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const SeriesPage = () => {
  const [series, setSeries] = useState(null);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_SERIES, {
    variables: { name, orderBy },
    onCompleted: data => setSeries(data.getSeries.series),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <section className={classes.seriesPageContainer}>
        <SeriesFiltersForm filter={value => setName(value.filter)} />
        {loading && <div style={{ color: "white" }}>Loading...</div>}
        {!loading && (
          <div className={classes.wrapper}>{series && renderCards(series)}</div>
        )}
      </section>
    </Layout>
  );
};

export default SeriesPage;
