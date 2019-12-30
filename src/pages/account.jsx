import React from "react";
import { Router } from "@reach/router";
import { Link } from "gatsby";

const Home = () => <p>Hi !</p>;
const Settings = () => <p>Settings</p>;

const AccountPage = () => {
  console.log("render account");
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/account/settings">Settings</Link>{" "}
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
      </Router>
    </nav>
  );
};

export default AccountPage;
