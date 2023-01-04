import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import singleProductReducer from "./slices/singleProductSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: singleProductReducer,
  },
});

export default store;
