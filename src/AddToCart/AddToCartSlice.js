import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const addToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
