import React, { useState } from "react";
import classes from "./manufacturers.module.css";
import Layout from "../components/layout";
import Card from "../components/card/manufacturer";
import ManufacturersFiltersForm from "../components/form/manufacturersFilters";
import { GET_MANUFACTURERS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const renderCards = manufacturers =>
  manufacturers.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const ManufacturersPage = () => {
  const [manufacturers, setManufacturers] = useState(null);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_MANUFACTURERS, {
    variables: { name, orderBy },
    onCompleted: data => setManufacturers(data.getManufacturers.manufacturers),
    onError: error => console.log(error)
  });

  return (
    <Layout header>
      <section className={classes.manufacturersPageContainer}>
        <ManufacturersFiltersForm
          filter={value => setName(value.filter)}
        />
        {loading && <div style={{ color: "white" }}>Loading...</div>}
        {!loading && (
          <div className={classes.wrapper}>
            {manufacturers && renderCards(manufacturers)}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ManufacturersPage;
