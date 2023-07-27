/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/26871fbb-9901-4e40-b443-58d6442b5b94')
            .then((res) => { setProduct(res.data) })
    }, [])


    return <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
    </ProductContext.Provider>
}