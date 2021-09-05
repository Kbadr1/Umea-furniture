import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.scss";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalSum, setQuantity } =
    useContext(CartContext);

  return (
    <div className="Cart">
      {/* page name */}
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <h1>Cart</h1>
            </div>
            <div className="col-6">
              <p>
                <Link to="/">Home</Link> / Cart
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* cart */}
      {cart.length ? (
        <div className="container cart-products">
          <div className="row titles">
            <div className="col-md-2"></div>
            <div className="col-md-3">product</div>
            <div className="col-md-2">price</div>
            <div className="col-md-2">quantity</div>
            <div className="col-md-2">subtotal</div>
            <div className="col-md-1"></div>
          </div>
          {cart.map((product) => (
            <div className="row cart-product d-flex align-items-center">
              <div className="col-md-2">
                <img
                  src={`http://localhost:1337${product.image[0].url}`}
                  alt=""
                />
              </div>
              <div className="col-md-3 name">{product.name}</div>
              <div className="col-md-2">EGP {product.price} </div>
              <div className="col-md-2">
                <div className="quantity">
                  <button
                    className="quantity-button"
                    onClick={() => setQuantity(product, product.quantity + 1)}
                  >
                    <i class="bi bi-plus-circle"></i>
                  </button>
                  <input
                    disabled
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(product, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="quantity-button"
                    onClick={
                      product.quantity >= 2
                        ? () => setQuantity(product, product.quantity - 1)
                        : ""
                    }
                  >
                    <i class="bi bi-dash-circle"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-2">
                EGP {product.quantity * product.price}
              </div>
              <div className="col-md-1">
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(product)}
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart container text-center">
          <h3>Your cart is currently empty.</h3>
          <Link to="/products">
            <button className="btn">Return to shop</button>
          </Link>
        </div>
      )}
      {cart.length && (
        <div className="checkout container">
          <div className="row ">
            <div
              className="offset-md-6 col-md-6 col-8 offset-4 col-lg-4 offset-lg-8 "
              style={{ border: "1px solid gray", padding: "30px" }}
            >
              <p> Total sum: EGP {getTotalSum()}</p>
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
