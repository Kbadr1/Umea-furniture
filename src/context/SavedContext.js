import React, { createContext, useState, useEffect } from "react";

export const SavedContext = createContext();

const SavedContextProvider = (props) => {
  const savedFromLocalStorage = JSON.parse(
    localStorage.getItem("saved") || "[]"
  );
  const [saved, setSaved] = useState(savedFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  const addToSaved = (product) => {
    let newSaved = [...saved];
    let itemInSaved = newSaved.find((item) => product.name === item.name);
    if (itemInSaved) {
      itemInSaved.quantity++;
    } else {
      itemInSaved = {
        ...product,
        quantity: 1,
      };
      newSaved.push(itemInSaved);
    }
    setSaved(newSaved);
  };

  const removeFromSaved = (productToRemove) => {
    setSaved(saved.filter((product) => product !== productToRemove));
  };

  const getSavedTotal = () => {
    return saved.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <SavedContext.Provider
      value={{
        saved,
        addToSaved,
        removeFromSaved,
        getSavedTotal,
      }}
    >
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedContextProvider;
