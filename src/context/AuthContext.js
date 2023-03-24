import React from "react";
import { createContext, useState, useEffect } from "react";
import { getSession } from "../utils/sessionStorage";

const AuthContext = createContext({
  loggedUser: {
    username: "",
  },
  loggedIn: false,
  setLoggedUser: () => {},
  setLoggedIn: () => {},
});

export default AuthContext;

export function AuthContextProvider(props) {
  useEffect(() => {
    const username = getSession();

    if (username !== undefined && username !== null && username !== "") {
      setLoggedIn();
      setLoggedUser(username);
    }
  }, []);

  const setLoggedUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      loggedUser: data,
    }));
  };

  const setLoggedIn = () => {
    setState((prevState) => ({
      ...prevState,
      loggedIn: !prevState.loggedIn,
    }));
  };

  const setLogout = () => {
    setState((prevState) => ({
      ...prevState,
      loggedUser: {},
      loggedIn: false,
    }));
  };

  const initialState = {
    loggedUser: {},
    loggedIn: false,
    setLoggedUser,
    setLoggedIn,
    setLogout,
  };

  const [state, setState] = useState(initialState);

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
