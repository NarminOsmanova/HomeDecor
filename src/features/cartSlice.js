import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState = {
  products: initialCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
     
        const productToAdd = action.payload;
        const existingProduct = state.products.find((product) => product.id === productToAdd.id);
  
        if (existingProduct) {
          // Product already exists in the cart, update its quantity
          existingProduct.quantity += productToAdd.quantity;
        } else {
          // Product does not exist in the cart, add it as a new product
          state.products.push(productToAdd);
        }
        localStorage.setItem("cartItems", JSON.stringify([...state.products]));
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.products));

    },
    deleteAll: (state) => {
      state.products = [];
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.products));
      }
    },
  },
});

export const { addToCart, removeFromCart, deleteAll, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;