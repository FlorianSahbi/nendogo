import React from "react";
import "./reset.css";
import classes from "./layout.module.css";
import { Link } from "@reach/router"

let currentUser = null;
if (localStorage.getItem("isLoggedIn") === "true") {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
  console.log(currentUser)

}

const logout = () => {
  localStorage.removeItem("user");
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "http://localhost:8000/nendoroids";
}

const renderUserInformation = () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    return (
      <>
        <div className={classes.idProfilPic}>
          <img className={classes.idPicture} src={currentUser.avatar} alt={`${currentUser.pseudo}-profile-picture`} />
        </div>
        <div className={classes.idName}>
          <Link to={`/${currentUser.pseudo}`}>{currentUser.pseudo}</Link>
          {" "}
          <span onClick={logout} style={{ cursor: "pointer" }}>Logout</span>
        </div>
      </>
    )
  }
  return (
    <div className={classes.idName}>
      <Link to="/signin">Sign in</Link>
    </div>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <header className={classes.container}>
        <div className={classes.wrapper}>

          <div className={classes.column}>
            <h1 className={classes.title}>Nendoroids</h1>
          </div>

          <div className={classes.column}>
            <Link to="/users">Users </Link>
            <Link to="/nendoroids">Nendoroids </Link>
          </div>

          <div className={classes.column}>
            <div className={classes.idContainer}>
              <div className={classes.idWrapper}>
                {renderUserInformation()}
              </div>
            </div>
          </div>
          
        </div>
      </header>
      <section className={classes.bodyContainer}>
        <div className={classes.bodyWrapper}>
          {children}
        </div>
      </section>
    </>
  )
}
