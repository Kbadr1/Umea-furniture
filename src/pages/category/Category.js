import React, { useContext, useEffect, useState } from "react";
import "./category.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import { ApiContext, SearchContext } from "../../context/index";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

const Category = () => {
  const [subEmail, setSubEmail] = useState("");

  const { getAllProducts, getALlCategories, allProducts, allCategories } =
    useContext(ApiContext);
  const { searchTerm, setSearchTerm, handleSearchSubmit } =
    useContext(SearchContext);

  const [currentCategory, setCurrentCategory] = useState({});
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);

  const { id } = useParams();

  const getCategoryById = () => {
    axios
      .get(`http://localhost:1337/categories/${id}`)
      .then((res) => {
        setCurrentCategory(res.data);
        setCurrentCategoryProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoryById();
    getALlCategories();
    getAllProducts();
  }, [id]);

  return (
    <div className="Category">
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <h1>{currentCategory.name}</h1>
            </div>
            <div className="col-9">
              <div className="page-links">
                <Link to="/">Home</Link> / <Link to="/products">Shop</Link> /{" "}
                {currentCategory.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="row  mb-4">
              {/* showing restults and sorting */}
              <div className="results col-6 ">
                <h6> Showing all {currentCategoryProducts.length} results</h6>
              </div>
            </div>
            {/* products */}
            <div className="row">
              {currentCategoryProducts.map((product) => (
                <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          {/* categories */}
          <div className="col-12 col-lg-3 categories">
            <h3>Categories</h3>
            <hr />
            {allCategories.map((category) => (
              <div key={category.id}>
                <Link to={`/category/${category.id}`}>
                  <p
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", duration: 0.8 },
                    }}
                  >
                    {category.name} ({category.products.length})
                  </p>
                </Link>
              </div>
            ))}
            <br />
            <form className="input-group mb-3" onSubmit={handleSearchSubmit}>
              <input
                value={searchTerm}
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="bi bi-search"></i>
              </span>
            </form>
            {/* side-products */}
            <div className="side-products mt-5">
              <h3>Products</h3>
              <hr />
              {allProducts.slice(0, 20).map((product) => (
                <div key={product.id}>
                  {product.isFeatured === true && (
                    <div className="row mb-5">
                      <div className="col-3 col-md-2 col-lg-4">
                        <img
                          src={`http://localhost:1337${product.image[0].url}`}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="col-9 col-md-10 col-lg-8">
                        <h6 className="mb-3" style={{ color: "#787773" }}>
                          {product.name}
                        </h6>
                        <h6>{product.price} EGP</h6>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className=" news-letter">
              <h3>Newsletter</h3>
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
    </div>
  );
};

export default Category;
