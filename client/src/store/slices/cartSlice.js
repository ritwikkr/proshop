import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = [...state.data, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
