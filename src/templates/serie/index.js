import React from "react";
import Layout from "../../components/layout/index";

const Serie = ({ pageContext: { name } }) => {
  return (
    <Layout footer={false}>
      <section>
        <div style={{ color: "white" }}>
          {name}
        </div>
      </section>
    </Layout>
  );
}

export default Serie;
