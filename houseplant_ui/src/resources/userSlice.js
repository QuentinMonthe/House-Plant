import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../services/auth.services";

const data = localStorage.getItem("auth");

const initialState = {
  loading: false, // for monitoring loading request
  userInfo: data !== null ? JSON.parse(data).userInfo : {}, // for user object
  accessToken: data !== null ? JSON.parse(data).accessToken : null, // for storing the access token
  refreshToken: data !== null ? JSON.parse(data).refreshToken : null, // for storing the refresh token
  error: null, // for monitoring errors request
  success: false, // for monitoring success response
};

const userSclice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userInfo = {};
      localStorage.removeItem("auth");
    },
    resetLoading: (state) => {
      state.error = null;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload.access;
        state.refreshToken = payload.refresh;
        state.userInfo = payload.user;
        localStorage.setItem(
          "auth",
          JSON.stringify({
            userInfo: payload.user,
            accessToken: payload.access,
            refreshToken: payload.refresh,
          })
        );
        state.success = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.userInfo = {};
        localStorage.removeItem("auth");
        state.success = true;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { deleteUser, resetLoading } = userSclice.actions;

export default userSclice.reducer;
