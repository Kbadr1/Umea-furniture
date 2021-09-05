import React, { useEffect } from "react";
import "./about.scss";
import {
  headerImg,
  collectionsImg,
  shopImg,
  materialsImg,
  videoImg,
} from "../../images/index";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="About">
      <div className="header-image">
        <img src={headerImg} alt="" />
      </div>
      <div className="container">
        <Fade>
          <div
            className="row d-flex align-items-center"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6" style={{ padding: "40px" }}>
              <img src={collectionsImg} alt="" />
            </div>
            <div className="col-md-6" style={{ padding: "40px" }}>
              <p className="p-title">ABOUT OUR SHOP</p>
              <h2>Experience the shop</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                ut sem viverra aliquet eget sit amet nunc.
              </p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div
            className="row d-flex align-items-center"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6" style={{ padding: "40px" }}>
              <p className="p-title">ABOUT OUR SHOP</p>
              <h2>Experience the shop</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                ut sem viverra aliquet eget sit amet nunc.
              </p>
            </div>
            <div className="col-md-6" style={{ padding: "40px" }}>
              <img src={shopImg} alt="" />
            </div>
          </div>
        </Fade>
        <Fade>
          <div
            className="row d-flex align-items-center"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6" style={{ padding: "40px" }}>
              <img src={materialsImg} alt="" />
            </div>
            <div className="col-md-6" style={{ padding: "40px" }}>
              <p className="p-title">ABOUT OUR SHOP</p>
              <h2>Experience the shop</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                ut sem viverra aliquet eget sit amet nunc.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="video">
        <img src={videoImg} alt="" />
      </div>
    </div>
  );
};

export default About;
