import { createSlice } from "@reduxjs/toolkit";

const initialWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];
const initialState = {
    wishlistsItems: initialWishItems,
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
        const productToAdd = action.payload;
        const existingProduct = state.wishlistsItems.find((product) => product.id === productToAdd.id);
  
        if (existingProduct) {
            alert('You cannot add this to wishlists, it has already been added!');
        } else {
          // Product does not exist in the cart, add it as a new product
          state.wishlistsItems.push(productToAdd);
        }
        localStorage.setItem("wishItems", JSON.stringify([...state.wishlistsItems]));
    },
    removeFromWish: (state, action) => {
      state.wishlistsItems = state.wishlistsItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishItems", JSON.stringify(state.wishlistsItems));

    },
   
  },
});

export const { addToWish, removeFromWish } =
  wishSlice.actions;

export default wishSlice.reducer;