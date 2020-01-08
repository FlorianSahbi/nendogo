import React, { useState } from "react";
import { createContainer } from "unstated-next";

const isConnected = () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    return true;
  }
  return false;
};

function functione() {
  if (isConnected) {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    return currentUser;
  }
  return undefined;
}

function useAuth(isLoggedIn = isConnected(), loggedInUser = functione()) {
  let [isAuth, setIsAuth] = useState(isLoggedIn);
  let [user, setUser] = useState(loggedInUser);
  let signin = () => setIsAuth(true);
  let signout = () => setIsAuth(false);

  let setCurrentUser = user => setUser(user);
  let getCurrentUser = () => {
    
  };
  return {
    isAuth,
    user,
    signin,
    signout,
    setCurrentUser,
    getCurrentUser
  };
}

let Auth = createContainer(useAuth);

export default Auth;
