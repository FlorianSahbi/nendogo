import React from "react";
import classes from "./style.module.css";
import Layout from "../../components/layout";
import Card from "../../components/card";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS_QUERY } from "../../apollo/queries/index";

const renderCards = userArray => {
  return userArray.map(user => (
    <Card
      key={user.id}
      id={user.id}
      name={user.pseudo}
      iamges={[user.avatar]}
    />
  ));
};

export default function UsersPage() {
  const { error, loading, data } = useQuery(GET_USERS_QUERY, {
    fetchPolicy: "no-cache"
  });

  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading...</div>;

  const {
    getUsers: { users }
  } = data;

  return (
    <Layout>
      <section className={classes.usersContainer}>
        <div className={classes.wrapper}>{renderCards(users)}</div>
      </section>
    </Layout>
  );
}
