import React, { createContext, useState } from "react";

export const ProductModalContext = createContext();

const ProductModalContextProvider = (props) => {
  const [productData, setProductData] = useState({});

  return (
    <ProductModalContext.Provider value={{ productData, setProductData }}>
      {props.children}
    </ProductModalContext.Provider>
  );
};

export default ProductModalContextProvider;
