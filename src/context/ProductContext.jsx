/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/4dd5996c-a1ee-4452-994a-4b36c7d28001')
            .then((res) => { setProduct(res.data) })
    }, [])


    return <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
    </ProductContext.Provider>
}