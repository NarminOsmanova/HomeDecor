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

  const [checkedCategories, setCheckedCategories] = useState([]);
  const [checkedCollections, setCheckedCollections] = useState([]);
  const handleCategoryChange= (event)=>{
    const {value,checked}=event.target;
    if(checked){
      setCheckedCategories(prev=>[...prev,value])
    }else{
      setCheckedCategories((prev) => prev.filter((category) => category !== value))
    }
  }
  const handleCollectionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedCollections((prev) => [...prev, value]);
    } else {
      setCheckedCollections((prev) => prev.filter((collection) => collection !== value));
    }
  };
  
const getFilteredProducts = filteredProducts.filter((item) => {
  const categoryFilter =
  checkedCategories.length === 0 || checkedCategories.includes(item.category);

const collectionFilter =
  checkedCollections.length === 0 ||item.collection.some((coll) => checkedCollections.includes(coll));

return categoryFilter && collectionFilter;
});

  const values = {
    handleItemClick,
    filteredProducts,
    getFilteredProducts,
    handleCategoryChange,
    handleCollectionChange,
    checkedCategories,
    setCheckedCategories,
    collection,
    setCollections,
    showCollectionCard,
    checkedCollections,
    setCheckedCollections,
    selectedTitle,
    setSelectedTitle
  };

  return (
    <CollectionContext.Provider value={values}>
      {children}
    </CollectionContext.Provider>
  );
};
