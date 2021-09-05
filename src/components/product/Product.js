import React, { useContext, useEffect, useState } from "react";
import {
  CartContext,
  SavedContext,
  ProductModalContext,
} from "../../context/index";
import "./product.scss";
import Fade from "react-reveal/Fade";
const Product = ({ product }) => {
  const [hover, setHover] = useState(null);

  const { productData, setProductData } = useContext(ProductModalContext);
  const { addToCart } = useContext(CartContext);
  const { addToSaved } = useContext(SavedContext);

  let onHover = (id) => {
    setHover(id);
  };
  let onOut = () => {
    setHover(null);
  };

  return (
    <Fade>
      <div
        className="Product mb-5"
        key={product.id}
        onMouseOver={() => onHover(product.id)}
        onMouseOut={onOut}
      >
        <div className="product-header d-flex align-items-center justify-content-center">
          <img src={`http://localhost:1337${product.image[0].url}`} alt="" />
          <Fade>
            <div
              className={
                hover === product.id
                  ? `options show d-flex justify-content-center align-items-center`
                  : `options hide`
              }
            >
              <button onClick={() => addToCart(product)}>
                <i class="bi bi-cart3"></i>
              </button>
              <button onClick={() => addToSaved(product)}>
                <i class="bi bi-heart"></i>
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => setProductData(product)}
              >
                <i class="bi bi-zoom-in"></i>
              </button>
            </div>
          </Fade>
        </div>
        <div className="product-info">
          <h6>
            {product.name} <span> EGP {product.price} </span>
          </h6>
          <p>{product.category.name}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Product;
