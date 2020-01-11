import React from "react";
import Layout from "../../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import { TEST_SCULPTOR } from "../../apollo/queries/index";
import classes from "./style.module.css";
import Card from "../../components/card/nendoroid/index";
const Sculptor = ({ pageContext: { name } }) => {
  const { error, loading, data } = useQuery(TEST_SCULPTOR, {
    fetchPolicy: "no-cache",
    variables: { "name": name },
    onCompleted: data => console.log(data)
  })
  if (loading) return <div>OK...</div>;
  return (
    <Layout footer={false}>
     <section className={classes.container}>
        <div style={{ color: "white" }}>
          <h2 className={classes.title}>
            {name}
          </h2>
          <section className={classes.grid}>
            {data && data.getNendoroidsBySculptor.nendoroids.map(e => {
              return (
                <a href={`../../nendoroid/${e.formattedName}`}>
                  <Card images={e.images} name={e.formattedName} key={e.id} number={e.number} isLoaded={() => { }} />
                </a>
              )
            })}
          </section>
        </div>
      </section>
    </Layout>
  );
}

export default Sculptor;
