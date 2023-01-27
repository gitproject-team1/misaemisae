import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartItem from "./cartItemSlice";

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});
