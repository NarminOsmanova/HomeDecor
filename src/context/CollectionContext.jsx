/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import collections from "../data/collection";


export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collection, setCollections] = useState(collections);
  return (
    <CollectionContext.Provider value={[collection, setCollections]}>
      {children}
    </CollectionContext.Provider>
  );
};