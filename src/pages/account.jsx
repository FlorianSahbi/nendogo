import React from "react";
import { Router } from "@reach/router";
import { Link } from "gatsby";
import Upload  from "../components/upload/index";
import Files  from "../components/file/index";

const Home = () => <p>Hi !</p>;
const Settings = () => <p>Settings</p>;

const Uploads = () => {
  return (
    <>
      <Upload />
      <Files />
    </>
  );
};

const AccountPage = () => {
  console.log("render account");
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/account/settings">Settings</Link>{" "}
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
        <Uploads path="/account/upload" />
      </Router>
    </nav>
  );
};

export default AccountPage;
