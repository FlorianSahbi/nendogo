import React from "react";
import classes from "./users.module.css";
import Layout from "../components/layout";
import Card from "../components/card/user";
import { graphql } from "gatsby";

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

const UsersPage = ({
  data: {
    prisma: { users }
  }
}) => {
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
