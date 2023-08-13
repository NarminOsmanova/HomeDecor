/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d509e773-18d3-476b-ac9a-186217fac167")
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
