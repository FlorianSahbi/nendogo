import React, { useState } from "react";
import "./reset.css";
import classes from "./style.module.css";
import { Link } from "@reach/router";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../../apollo/queries/index";
import { IconContext } from "react-icons";

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

const renderUserInformation = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("isLoggedIn") === "true") {
      return (
        <>
          <div className={classes.idProfilPic}>
            <img
              className={classes.idPicture}
              src={currentUser.avatar}
              alt={`${currentUser.id}`}
            />
          </div>
          <div className={classes.idName}>
            <Link to={`/${currentUser.pseudo}`}>{currentUser.pseudo}</Link>{" "}
            <span onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </span>
          </div>
        </>
      );
    }
  }
  return (
    <div className={classes.idName}>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

const FilterByNumber = props => {
  const [getBla] = useLazyQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    onCompleted: data => {
      props.onClick(data.getNendoroidsByRange.nendoroids);
    }
  });
  return (
    <li onClick={() => getBla({ variables: { range: "701-800" } })}>
      {props.range}
    </li>
  );
};

export default function Layout({ children }) {
  const [displayFilters, setdisplayFilters] = useState(false);

  const handleData = value => {};

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <>
        {displayFilters && (
          <div
            onClick={() => setdisplayFilters(false)}
            className={classes.backdrop}
          ></div>
        )}
        <section
          className={
            displayFilters
              ? `${classes.filtersPanel} ${classes.filtersPanelShow}`
              : `${classes.filtersPanel} ${classes.filtersPanelHide}`
          }
        >
          <div className={classes.wrapperPanel}>
            <ul>
              <FilterByNumber range="000-101" onClick={handleData} />
              <FilterByNumber range="100-201" onClick={handleData} />
              <FilterByNumber range="200-301" onClick={handleData} />
              <FilterByNumber range="300-401" onClick={handleData} />
              <FilterByNumber range="400-501" onClick={handleData} />
              <FilterByNumber range="500-601" onClick={handleData} />
              <FilterByNumber range="600-701" onClick={handleData} />
              <FilterByNumber range="700-801" onClick={handleData} />
              <FilterByNumber range="800-901" onClick={handleData} />
              <FilterByNumber range="900-1001" onClick={handleData} />
              <FilterByNumber range="1000-1101" onClick={handleData} />
            </ul>
          </div>
        </section>

        <header className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.column}>
              <h1 className={classes.title}>Nendoroids</h1>
            </div>

            <div className={classes.column}>
              <Link to="/users/">Users </Link>
              <Link to="/nendoroids/">Nendoroids </Link>
              <span onClick={() => setdisplayFilters(!displayFilters)}>
                filter
              </span>
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
            <UserContext.Provider value={currentUser}>
              {children}
            </UserContext.Provider>
          </div>
        </section>
      </>
    </IconContext.Provider>
  );
}
