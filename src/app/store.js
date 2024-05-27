import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import AddToCartSlice from "../AddToCart/AddToCartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addtocart: AddToCartSlice,
  },
});
