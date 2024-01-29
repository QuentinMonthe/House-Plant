import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../resources/Data";

// Recuperation de de la liste des plante d'un utilisateur
export const getPlant = createAsyncThunk(
  "plant/getPlant",
  async ({ accessToken }, { rejectWithValue }) => {
    try {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: API_URL + "/plant/",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        data: "",
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

// Ajout d'une nouvelle plante pour un utilisateur
export const addPlant = createAsyncThunk(
  "plant/addPlant",
  async ({ accessToken, data }, { rejectWithValue }) => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL + "/plant/",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + accessToken,
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

// Pointage de l'arrosage d'une plante
export const watering = createAsyncThunk(
  "plant/watering",
  async ({ accessToken, data }, { rejectWithValue }) => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL + "/watering/check_watering/",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
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

// Pointage de l'arrosage d'une plante
export const deletePlant = createAsyncThunk(
  "plant/deletePlant",
  async ({ accessToken, code }, { rejectWithValue }) => {
    try {
      const config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API_URL}/plant/${code}`,
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
