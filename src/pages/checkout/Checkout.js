import React, { useContext, useState } from "react";
import "./checkout.scss";
import { CartContext, AuthContext } from "../../context";
import { Redirect, useHistory } from "react-router";
import axios from "axios";

const Checkout = () => {
  const { cart, getTotalSum, setCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  let history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();

    let items = [];
    let products = [];
    cart.map((product) => {
      items.push({
        product: product.id,
        quantity: product.quantity,
      });

      products.push(product.id);
    });

    const orderData = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      city: city,
      address: address,
      users_permissions_user: currentUser.id,
      items,
      products,
      total: getTotalSum(),
    };

    axios
      .post(`http://localhost:1337/orders`, orderData)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    setCart([]);
  };

  return (
    <div className="Checkout container">
      <div className="row">
        <div className="col-md-8">
          <form className="row" onSubmit={submitOrder}>
            <div className="col-md-6">
              <label for="firstname" className="form-label">
                First name:
              </label>
              <input
                className="form-control"
                type="text"
                required
                placeholder="firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="lastname" className="form-label">
                Last name:
              </label>
              <input
                className="form-control"
                id="lastname"
                type="text"
                required
                placeholder="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="phone" className="form-label">
                Phone number:
              </label>
              <input
                className="form-control"
                id="phone"
                type="text"
                required
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="email" className="form-label">
                E-mail:
              </label>
              <input
                className="form-control"
                id="email"
                type="text"
                required
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label for="city" className="form-label">
                City:
              </label>
              <input
                className="form-control"
                id="city"
                type="text"
                required
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-md-8">
              <label for="address" className="form-label">
                Address:
              </label>
              <input
                className="form-control"
                id="address"
                type="text"
                required
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <button type="submit">place order</button>
          </form>
        </div>
        <div className="col-md-4">
          {cart.map((product) => (
            <div className="product" key={product.id}>
              <h6>{product.name}</h6>
              <p>{product.quantity} x</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
