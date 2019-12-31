import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/serie";
import { GET_MANUFACTURERS_QUERY } from "../apollo/queries/index";
import { UserContext } from "../components/layout/index";

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(({ id, name }) => {
    return <Card key={id} id={id} name={name} number={"0"} images={"o"} />;
  });
  return cards;
};

const ManufacturersPage = () => {
  console.log("render Series");

  const currentUser = useContext(UserContext);

  const [manufacturers, setManufacturer] = useState(null);

  const [getManufacturers, { loading, data }] = useLazyQuery(
    GET_MANUFACTURERS_QUERY,
    {
      onCompleted: data => {
        setManufacturer(data);
        console.log(serie);
      }
    }
  );

  useEffect(() => {
    getManufacturers();
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  console.log(data);

  return (
    <Layout header={true}>
      <section className={classes.nendoroidsContainer}>
        <div className={classes.wrapper}>
          {manufacturers &&
            manufacturer.getManufacturers &&
            renderCards(
              manufacturers.getManufacturers.manufacturers,
              currentUser
            )}
        </div>
      </section>
    </Layout>
  );
};

export default ManufacturersPage;
