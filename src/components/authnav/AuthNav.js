import React from "react";
import { NavLink } from "react-router-dom";
import "./authNav.scss";

const AuthNav = () => {
  return (
    <div className="AuthNav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link "
            aria-current="page"
            to="/signin"
          >
            Log in
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/signup">
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
