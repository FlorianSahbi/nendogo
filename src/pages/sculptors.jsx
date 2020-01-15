import React, { useState } from "react";
import classes from "./sculptors.module.css";
import Layout from "../components/layout";
import Card from "../components/card/sculptor";
import SculptorsFiltersForm from "../components/form/sculptorsFilters";
import { GET_SCULPTORS } from "../apollo/graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const renderCards = sculptors =>
  sculptors.map(({ id, name }) => <Card key={id} id={id} name={name} />);

const SculptorsPage = () => {
  const [sculptors, setSculptors] = useState(null);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name_ASC");

  const { error, loading, data } = useQuery(GET_SCULPTORS, {
    variables: { name, orderBy },
    onCompleted: data => setSculptors(data.getSculptors.sculptors),
    onError: error => console.log(error)
  });

  const renderFilter = () => {
    return (
      <nav className={classes.filters}>
        <SculptorsFiltersForm filter={value => setName(value.filter)} />
        <button onClick={() => setOrderBy("name_ASC")}>ASC</button>
        <button onClick={() => setOrderBy("name_DESC")}>DESC</button>
      </nav>
    );
  };

  return (
    <Layout header>
      <section className={classes.sculptorsPageContainer}>
        {renderFilter()}
        {loading && <div style={{ color: "white" }}>Loading...</div>}
        {!loading && (
          <div className={classes.wrapper}>
            {sculptors && renderCards(sculptors)}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SculptorsPage;
