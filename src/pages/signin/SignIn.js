import React, { useContext, useState } from "react";
import "./signin.scss";
import { AuthContext } from "../../context/AuthContext";
import AuthNav from "../../components/authnav/AuthNav";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { setUsername, setPassword, signIn, loggedIn, loginError } =
    useContext(AuthContext);

  return (
    <div className="SignIn ">
      {/* page name */}
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <h1>Login</h1>
            </div>
            <div className="col-9">
              <div className="page-links">
                <Link to="/">Home</Link> / Log in
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 content">
            <AuthNav />
            <form onSubmit={signIn}>
              {loginError && (
                <div className="login-error">Wrong Email or Password !</div>
              )}
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  required
                  minLength="8"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" class="btn btn-primary">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
