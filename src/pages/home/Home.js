import React, { useState, useEffect, useContext } from "react";
import "./home.scss";
import { ApiContext } from "../../context/ApiContext";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import {
  carouselImg,
  carouselImg1,
  carouselImg2,
  offerImg1,
  offerImg2,
  offerImg3,
  featuresImg1,
  featuresImg2,
} from "../../images";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { getAllProducts, allProducts, teamMembers, getTeamMembers } =
    useContext(ApiContext);

  const [subEmail, setSubEmail] = useState("");

  useEffect(() => {
    getAllProducts();
    getTeamMembers();
  }, []);

  return (
    <div className="Home">
      {/* carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade>
                <div>
                  <p>Furniture</p>
                  <h1>Beauty indoors</h1>
                  <p className="mb-5">
                    The perfect place for every cpntemporary furniture store and
                    manufacturer. This is Umea.
                  </p>
                  <Link to="/products">
                    <button className="view-more">View more</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={carouselImg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div>
                <p>Furniture</p>
                <h1>Superior living</h1>
                <p className="mb-5">
                  The perfect place for every cpntemporary furniture store and
                  manufacturer. This is Umea.
                </p>
                <Link to="/products">
                  <button className="view-more">View more</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={carouselImg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div>
                <p>Furniture</p>
                <h1>Better Interiors </h1>
                <p className="mb-5">
                  The perfect place for every cpntemporary furniture store and
                  manufacturer. This is Umea.
                </p>
                <Link to="/products">
                  <button className="view-more">View more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* three offers */}
      <Fade>
        <div className="three-offers custom-container mt-4">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="offer">
                <Link to="/category/7">
                  <img src={offerImg1} alt="" />
                  <div className="offer-decsription">
                    <p>special offer</p>
                    <h4>Recycled metal</h4>
                    <hr />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="offer">
                <Link to="/category/6">
                  <img src={offerImg2} alt="" />
                  <div className="offer-decsription">
                    <p>top picks</p>
                    <h4>Custom woodwork</h4>
                    <hr />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="offer">
                <Link to="/category/5">
                  <img src={offerImg3} alt="" />
                  <div className="offer-decsription">
                    <p>minimal decor</p>
                    <h4>Handmade pottery</h4>
                    <hr />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* browse products */}
      <div className="browse custom-container">
        <p className="text-center">browse our items</p>
        <h2>Ideal for your home</h2>
        <hr className="mx-auto" />
        <div className="row">
          {allProducts.map((product) => (
            <>
              {product.isFeatured === true && (
                <div className="col-12 col-sm-6  col-lg-3">
                  <Product product={product} />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      {/* team */}
      <div className="team">
        <div className="container">
          <p className="text-center">our creative force</p>
          <h2 className="text-center">Meet our team</h2>
          <hr className="mx-auto" />
          <div className="row">
            {teamMembers.map((member) => (
              <Fade>
                <div className="col-12 col-sm-6 col-lg-3 mb-5" key={member.id}>
                  <div className="team-image">
                    <img
                      src={`http://localhost:1337${member.image[0].url}`}
                      alt=""
                    />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
      {/* features */}
      <div className="features container ">
        <div className="row ">
          <div className="col-md-6 col-lg-4  ">
            <div className="row ">
              <div className="col-3 col-md-3">
                <img src={featuresImg1} alt="" />
              </div>
              <div className="col-9 col-md-9  ">
                <h6>20 day returns</h6>
                <p>Vel risus commodo viverra maecenas accumsan</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <div className="row">
              <div className="col-3 col-md-3   ">
                <img src={featuresImg2} alt="" />
              </div>
              <div className="col-9 col-md-9  ">
                <h6>Free Shipping</h6>
                <p>Vel risus commodo viverra maecenas accumsan</p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 ">
            <h4>Sign up for our newsletter</h4>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                onChange={(e) => setSubEmail(e.target.value)}
              />

              <button
                type="submit"
                style={{ all: "unset" }}
                onClick={() => {
                  subEmail !== "" &&
                    store.addNotification({
                      title: "Thank you!",
                      message: "Successfully subscribed to our news letter.",
                      type: "success",
                      container: "top-right",
                      animationIn: ["animate__animated animate__fadeInRight"],
                      animationOut: [
                        "animate__animated  animate__fadeOutRight",
                      ],
                      dismiss: {
                        duration: 3000,
                      },
                    });
                }}
              >
                <span className="input-group-text" id="basic-addon2">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
