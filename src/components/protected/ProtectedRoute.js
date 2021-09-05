import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../context";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
