import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [loginError, setLoginError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const signInData = {
    identifier: username,
    password: password,
  };

  const signUpData = {
    username: username,
    password: password,
    email: email,
  };

  const signIn = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:1337/auth/local`, signInData)
      .then((res) => {
        localStorage.setItem("token", res.data.jwt);
        setLoggedIn(true);
        history.push("/");
      })
      .catch((err) => {
        setLoginError(true);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:1337/auth/local/register`, signUpData)
      .then((res) => {
        history.push("/signin");
      })
      .catch((err) => {
        setSignUpError(true);
      });
  };

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push("/");
  };

  const getCurrentUserInfo = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("http://localhost:1337/users/me", config)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loggedIn === true && getCurrentUserInfo();
  }, [loggedIn]);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        signIn,
        email,
        setEmail,
        signUp,
        currentUser,
        logOut,
        loggedIn,
        loginError,
        signUpError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
