import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const createSession = createAsyncThunk(
  "createSession",
  async ({ sessionType, userData }) => {
    const response = await axios.post(`/api/v1/user/${sessionType}`, userData);
    console.log(response.data);
    return response.data;
  }
);

export const addUserAddress = createAsyncThunk(
  "addUserAddress",
  async (body) => {
    const response = await axios.put(`/api/v1/user/addAddress`, body);
    console.log(response);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isError: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(createSession.fulfilled, (state, action) => {
      console.log(`hlloooo`);
      console.log(action);
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(createSession.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = action.payload;
    });

    builder.addCase(addUserAddress.pending, (state, action) => {});
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
