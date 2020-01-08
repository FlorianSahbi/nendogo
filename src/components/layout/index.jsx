import React from "react";
import "./reset.css";
import classes from "./style.module.css";
import { IconContext } from "react-icons";
import Footer from "../footer/index";
import Header from "../header/index";

let currentUser = {};
if (typeof window !== "undefined") {
  if (localStorage.getItem("isLoggedIn") === "true") {
    currentUser = JSON.parse(localStorage.getItem("user"));
  }
}

export const UserContext = React.createContext(currentUser);

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "http://localhost:8000/nendoroids";
  }
};

export default function Layout({ children, header, footer }) {

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <>
        {header && <Header />}
        <section className={classes.bodyContainer}>
          <div className={classes.bodyWrapper}>
            <UserContext.Provider value={currentUser}>
              {children}
            </UserContext.Provider>
          </div>
        </section>
        {footer && <Footer />}
      </>
    </IconContext.Provider>
  );
}
