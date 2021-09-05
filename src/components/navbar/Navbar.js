import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logoDarkImg from "../../icons/umea-logo-regular.png";
import {
  AuthContext,
  SearchContext,
  SavedContext,
  CartContext,
} from "../../context/index";

const Navbar = () => {
  const { loggedIn, currentUser, logOut } = useContext(AuthContext);
  const { getSavedTotal } = useContext(SavedContext);
  const { searchTerm, setSearchTerm, handleSearchSubmit } =
    useContext(SearchContext);
  const { getCartTotal } = useContext(CartContext);

  return (
    <div className="Navbar">
      {/* top nav only visible on lg and xl screens */}
      <div className="nav-header custom-container d-none d-lg-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p>
                <a href="mailto:umea@qodeinteractive.com">
                  umea@qodeinteractive.com
                </a>{" "}
                / <a href="tel:6631559852"> +663 155 9852</a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <p>OPEN FROM 9AM TO 5PM – CLOSED ON WEEKENDS</p>
            </div>
          </div>
        </div>
      </div>
      {/* main navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-container">
        <div className="container-fluid">
          {/* brand logo */}
          <Link className="navbar-brand" to="/">
            <img src={logoDarkImg} alt="umea" />
          </Link>
          {/* navbar toggle button only visible on md & sm screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url(
                  "data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"
                )`,
              }}
            ></span>
          </button>
          {/* list of all navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* left list : home, shop, about, contact are always visible & cart, favourites, my orders, log out, login are only visible on md & sm screens */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-list">
              <li className="nav-item">
                <Link className={`nav-link`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/products">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className={`nav-link`} to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className={`nav-link`} to="/saved">
                  Favourites
                </Link>
              </li>
              <li
                className={loggedIn ? `nav-item d-lg-none` : `nav-item d-none`}
              >
                <Link className={`nav-link`} to="/orders">
                  My orders
                </Link>
              </li>
              <li
                className={loggedIn ? `nav-item d-lg-none` : `nav-item d-none`}
              >
                <Link className={`nav-link`} to="/" onClick={logOut}>
                  Log out
                </Link>
              </li>
              <li
                className={loggedIn ? `nav-item d-none` : `nav-item d-lg-none`}
              >
                <Link className={`nav-link`} to="/signin">
                  Login
                </Link>
              </li>
            </ul>
            {/* right list: search form always visible, login button or user dropdown depends on loggedin or not and saved, cart only visible on lg  & xl screens */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 right-list">
              <li className="nav-item">
                <div className={`nav-link`}>
                  <form class="input-group" onSubmit={handleSearchSubmit}>
                    <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <span class="input-group-text">
                        <i class="bi bi-search"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </li>

              <li className={`nav-item d-none d-lg-block`}>
                {loggedIn ? (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser.username} <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" to="/" onClick={logOut}>
                          Log out
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/orders">
                          My Orders
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link className={`nav-link`} to="/signin">
                    Login
                  </Link>
                )}
              </li>

              <li className="nav-item d-none d-lg-block">
                <Link className={`nav-link`} to="/saved">
                  <i class="bi bi-heart"></i>
                  {getSavedTotal() > 0 ? (
                    getSavedTotal() == 1 ? (
                      <span className="saved-total">{getSavedTotal()}</span>
                    ) : (
                      <span className="saved-total">+1</span>
                    )
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block">
                <Link className={`nav-link`} to="/cart">
                  <i class="bi bi-bag"></i>
                  {getCartTotal() > 0 ? (
                    <span className="cart-total">{getCartTotal()}</span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
