import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AuthNav from "../../components/authnav/AuthNav";
import "./signup.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { setUsername, setEmail, setPassword, signUp, signUpError } =
    useContext(AuthContext);

  return (
    <div className="SignUp ">
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <h1>Sign up</h1>
            </div>
            <div className="col-9">
              <div className="page-links">
                <Link to="/">Home</Link> / Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 content">
            <AuthNav />
            <form onSubmit={signUp}>
              {signUpError ? (
                <div className="signup-error">
                  This Email already registered
                </div>
              ) : (
                ""
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
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
