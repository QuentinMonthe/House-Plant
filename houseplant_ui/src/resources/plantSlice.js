import { createSlice } from "@reduxjs/toolkit";
import { addPlant, getPlant, watering } from "../services/plant.services";

const plantSlice = createSlice({
  name: "plant",
  initialState: {
    loading: false,
    plants: [],
    update: null,
    error: null,
    success: false,
  },
  reducers: {
    setPlants: (state, { payload }) => {
      state.plants = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlant.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.plants = payload;
        state.success = true;
      })
      .addCase(getPlant.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addPlant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPlant.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.update = payload;
        state.success = true;
      })
      .addCase(addPlant.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(watering.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(watering.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.update = payload;
        state.success = true;
      })
      .addCase(watering.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { setPlants } = plantSlice.actions;

export default plantSlice.reducer;
