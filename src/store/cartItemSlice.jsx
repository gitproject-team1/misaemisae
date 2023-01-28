import { createSlice, current } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const data = current(state).find(
        (data) => data.location === action.payload.location,
      );
      if (data === undefined) state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((data) => data.location !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = cartItem.actions;

export default cartItem;
