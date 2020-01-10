import React from "react";
import classes from "./users.module.css";
import Layout from "../components/layout";
import Card from "../components/card/user";
import { graphql } from "gatsby";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS_QUERY } from "../apollo/queries/index";


const handleLoading = () => {
  // const imgs = [...document.querySelectorAll(`#con img`)];
  // const tab = [...imgs.filter(i => i.complete === false)];
  // if (tab.length > 0) {
  //   return true;
  // }
  // return false;
  return;
};

const renderCards = userArray => {
  return userArray.map(user => (
    <Card
      key={user.id}
      id={user.id}
      name={user.pseudo}
      images={[user.avatar]}
    />
  ));
};

const UsersPage = () => {
  const { error, loading, data } = useQuery(GET_USERS_QUERY, {
    onCompleted: data => {},
    onError: error => {}
  });

  if (error) {
    return (
      <>
        <span>err</span>
      </>
    );
  }
  if (loading) {
    return <>loading...</>;
  }
  let {
    getUsers: { users }
  } = data;

  return (
    <Layout header>
      <section
        style={{ background: "#121415", minHeight: "100vh" }}
        className={classes.usersContainer}
      >
        <div className={classes.wrapper}>{renderCards(users)}</div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      users(orderBy: createdAt_DESC) {
        avatar
        id
        pseudo
      }
    }
  }
`;

export default UsersPage;
