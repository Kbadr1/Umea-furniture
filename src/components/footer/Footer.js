import React from "react";
import "./footer.scss";
import logoImg from "../../icons/umea-logo-regular.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer container">
      <div className="row">
        <div className="col-md-3">
          <img src={logoImg} alt="" />
          <p>
            Welcome to a place of refinement and beauty. This is Umeå, a WP gem
            we made for all furniture stores & brands.
          </p>
        </div>
        <div className="col-md-3">
          <h6>Studio</h6>
          <Link to="/contact">Contact us</Link>
          <br />
          <Link to="/about">About us</Link>
          <br />
          <Link to="/">Return policy</Link>
          <br />
          <Link to="/">Shipping Methods</Link>
        </div>
        <div className="col-md-3">
          <h6>Studio</h6>
          <Link to="/contact">Contact us</Link>
          <br />
          <Link to="/about">About us</Link>
          <br />
          <Link to="/">Return policy</Link>
          <br />
          <Link to="/">Shipping Methods</Link>
        </div>
        <div className="col-md-3">
          <h6>Follow Us</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
