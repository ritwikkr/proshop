import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Actions
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get(`/api/v1/product/getProducts`);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default productsSlice.reducer;
