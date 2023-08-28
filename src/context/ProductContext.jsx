/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/97880ae1-6e41-4c36-b048-e883ab75fb36")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};
