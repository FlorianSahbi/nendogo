import React from "react";
import { Router } from "@reach/router";
import { Link } from "gatsby";
import Upload from "../components/upload/index";
import Files from "../components/file/index";
import NewsletterForm from "../components/form/newsletter";

const Home = () => <NewsletterForm />;
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
  return (
    <section
      style={{
        background: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <nav>
        <Link to="/">Home</Link> <Link to="/account/settings">Settings</Link>{" "}
        <Router>
          <Home path="/account" />
          <Settings path="/account/settings" />
          <Uploads path="/account/upload" />
        </Router>
      </nav>
    </section>
  );
};

export default AccountPage;
