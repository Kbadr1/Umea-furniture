import React, { createContext, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const [limit, setLimit] = useState(9);
  const viewMoreProducts = () => {
    setLimit(limit + 9);
  };

  const getAllProducts = () => {
    axios
      .get(`http://localhost:1337/products`)
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLimitedProducts = () => {
    axios
      .get(`http://localhost:1337/products?_start=0&_limit=${limit}`)
      .then((res) => {
        setLimitedProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getALlCategories = () => {
    axios
      .get(`http://localhost:1337/categories`)
      .then((res) => {
        setAllCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTeamMembers = () => {
    axios
      .get(`http://localhost:1337/teams`)
      .then((res) => {
        setTeamMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ApiContext.Provider
      value={{
        getAllProducts,
        allProducts,
        getALlCategories,
        allCategories,
        teamMembers,
        getTeamMembers,
        viewMoreProducts,
        limit,
        limitedProducts,
        getLimitedProducts,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiContextProvider;
