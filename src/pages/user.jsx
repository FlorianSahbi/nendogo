import React from "react";
import { Router } from "@reach/router";
import User from "../templates/clientOnly/user/index";

const Home = props => <User pseudo={props.pseudo} />;

const UserPage = () => {
  return (
    <nav>
      <Router>
        <Home path="/user/:pseudo" />
      </Router>
    </nav>
  );
};

export default UserPage;
