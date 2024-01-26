import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../resources/Data";

// Fonction d'enregistrement des utilisateurs
export const register = createAsyncThunk(
  "user/register",
  async ({ data }, { rejectWithValue }) => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL + "/registration/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios.request(config);

      return;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.status) {
        return rejectWithValue(error.response.status);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Fonction de login des utilisateurs
export const login = createAsyncThunk(
  "user/login",
  async ({ data }, { rejectWithValue }) => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL + "/login/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);

      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.status) {
        return rejectWithValue(error.response.status);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Fonction de logout des utilisateurs
export const logout = createAsyncThunk(
  "user/logout",
  async ({ accessToken }, { rejectWithValue }) => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL + "/logout/",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        data: "",
      };

      await axios.request(config);

      return;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.status) {
        return rejectWithValue(error.response.status);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
