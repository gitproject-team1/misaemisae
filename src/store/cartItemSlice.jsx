import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addItem } = cartItem.actions;

export default cartItem;
