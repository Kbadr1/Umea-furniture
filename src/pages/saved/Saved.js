import React, { useContext, useState } from "react";
import { SavedContext, CartContext } from "../../context/index";
import { Link } from "react-router-dom";
import "./saved.scss";

const Saved = () => {
  const { saved, removeFromSaved } = useContext(SavedContext);
  const { addToCart } = useContext(CartContext);
  console.log(saved);

  const [hover, setHover] = useState(null);
  let onHover = (id) => {
    setHover(id);
  };
  let onOut = () => {
    setHover(null);
  };

  return (
    <div className="Saved">
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <h1>Saved products</h1>
            </div>
            <div className="col-6">
              <p>
                <Link to="/">Home</Link> / Saved products
              </p>
            </div>
          </div>
        </div>
      </div>
      {saved.length ? (
        <div className="saved-products container">
          <div className="row">
            {saved.map((product) => (
              <div
                className="col-md-4 "
                onMouseOver={() => onHover(product.id)}
                onMouseOut={onOut}
                key={product.id}
              >
                <div className="product-header">
                  <img
                    src={`http://localhost:1337${product.image[0].url}`}
                    alt=""
                  />
                  <div
                    className={
                      hover === product.id
                        ? `product-button show`
                        : `product-button hide`
                    }
                  >
                    <button className="add">Add to cart</button>
                  </div>
                </div>
                <h5>
                  {product.name} <span>{product.price} EGP</span>{" "}
                </h5>
                <p>{product.category.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-saved container text-center">
          <h3>You don't have any favourite products.</h3>
          <Link to="/products">
            <button className="btn">Return to shop</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Saved;
