import React, { useState, useEffect, useContext } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/serie";
import { GET_SERIES_QUERY } from "../apollo/queries/index";
import { UserContext } from "../components/layout/index";
import { AiOutlineLogout } from "react-icons/ai";


const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(
    ({ id, name }) => {
      return (
        <Card
          key={id}
          id={id}
          name={name}
          number={"0"}
          images={"o"}
        />
      );
    }
  );
  return cards;
};

const SeriesPage = () => {
  console.log("render Series");

  const currentUser = useContext(UserContext);

  const [serie, setSerie] = useState(null);

  const [getSeries, { loading, data }] = useLazyQuery(
    GET_SERIES_QUERY,
    {
      onCompleted: data => {
        setSerie(data);
        console.log(serie);
      }
    }
  );

  useEffect(() => {
    getSeries();
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  console.log(data)

  return (
    <Layout header={true}>


      <nav>
        
      </nav>



      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {serie &&
            serie.getSeries &&
            renderCards(serie.getSeries.series, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export default SeriesPage;
