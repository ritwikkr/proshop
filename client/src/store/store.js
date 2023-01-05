import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import singleProductReducer from "./slices/singleProductSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: singleProductReducer,
    cart: cartReducer,
  },
});

export default store;
