import React, { useState } from "react";
import classes from "./users.module.css";
import Layout from "../components/layout";
import Card from "../components/card/user";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../apollo/graphql/queries";

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
  const [pseudo, setPseudo] = useState("");
  const [orderBy, setOrderBy] = useState("pseudo_ASC");
  const [users, setUsers] = useState(null);

  const { error, loading, data } = useQuery(GET_USERS, {
    variables: { pseudo, orderBy },
    onCompleted: data => setUsers(data.getUsers.users),
    onError: error => console.log(error)
  });

  return (
    <div>Consoleokokoko</div>
    // <Layout>
    //   <section className={classes.usersContainer}>
    //     <div>Loading</div>
    //     {/* {loading && <div style={{color: "white"}}>Loading...</div>} */}
    //     {/* <div className={classes.wrapper}>{!loading && renderCards(users)}</div> */}
    //   </section>
    // </Layout>
  );
};

export default UsersPage;
