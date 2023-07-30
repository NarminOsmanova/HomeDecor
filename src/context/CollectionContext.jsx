/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import collections from "../data/collection";
import { ProductContext } from "./ProductContext";

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collection, setCollections] = useState(collections);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [showCollectionCard, setShowCollectionCard] = useState(false);
  const [product] = useContext(ProductContext);

  const handleItemClick = (title) => {
    setSelectedTitle(title);
    setShowCollectionCard(true);
  };

  useEffect(() => {
    console.log(selectedTitle);
  }, [selectedTitle]);

  const filteredProducts = selectedTitle
  ? product.filter((item) => item.collection.includes(selectedTitle))
  : product;

  const values = {
    handleItemClick,
    filteredProducts,
    collection,
    setCollections,
    showCollectionCard,
    setSelectedTitle
  };

  return (
    <CollectionContext.Provider value={values}>
      {children}
    </CollectionContext.Provider>
  );
};
