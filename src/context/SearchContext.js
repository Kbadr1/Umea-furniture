import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  let history = useHistory();

  const getProductsBySearchQuery = () => {
    axios
      .get(`http://localhost:1337/products?name_contains=${query}`)
      .then((res) => {
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchSubmit = (e) => {
    setQuery(searchTerm);
    setSearchTerm("");
    // history.push("/search");
    if (searchTerm !== "") {
      history.push("/search");
    } else {
      return;
    }
    e.preventDefault();
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearchSubmit,
        searchTerm,
        setSearchTerm,
        query,
        setQuery,
        getProductsBySearchQuery,
        filteredProducts,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
