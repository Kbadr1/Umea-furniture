import React, { useContext, useEffect } from "react";
import "./search.scss";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const {
    handleSearchSubmit,
    searchTerm,
    setSearchTerm,
    query,
    filteredProducts,
    getProductsBySearchQuery,
  } = useContext(SearchContext);

  useEffect(() => {
    getProductsBySearchQuery();
  }, [filteredProducts]);

  return (
    <div className="Search">
      {/* page name */}
      <div className="page-name ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6">
              <h1>
                {(filteredProducts.length === 0) | (query == "")
                  ? "No search results found"
                  : `Search results for: "${query}"`}
              </h1>
            </div>
            <div className="col-lg-6">
              <div className="page-links d-none d-lg-block">
                <Link to="/">Home</Link> /{" "}
                {(filteredProducts.length === 0) | (query == "")
                  ? "No search results found"
                  : `Search results for: "${query}"`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* new search */}
        <div className="new-search mb-5">
          <h4 className="mb-5">New search:</h4>
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
          <p className="search-tip">
            If you are not happy with the results below please do another search
          </p>
        </div>
        <div className="row">
          {query !== "" &&
            filteredProducts.map((product) => (
              <div className="col-sm-6 col-md-4" key={product.id}>
                <Product product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
