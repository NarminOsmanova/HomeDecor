/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/3bddd945-0017-4a14-947f-344055d64678")
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
