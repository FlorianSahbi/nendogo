import React from "react";
import classes from "./style.module.css";

import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Card from "../../components/card";

export default function UsersPage({
  data: {
    api: {
      getUsers: { users: data }
    }
  }
}) {
  return (
    <Layout>
      <SEO title="Users list" />
      <div className={classes.containerList}>
        {data.map(user => {
          return <Card name={user.pseudo} avatar={user.avatar} />;
        })}
      </div>
    </Layout>
  );
}

export const GATSBY_USER_QUERY = graphql`
  {
    api {
      getUsers {
        users {
          id
          avatar
          pseudo
        }
      }
    }
  }
`;
