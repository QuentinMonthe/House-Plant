import { createSlice } from "@reduxjs/toolkit";

const modalSclice = createSlice({
  name: "modal",
  initialState: { showModal: false },
  reducers: {
    closeModal: (state) => {
      state.showModal = false;
    },
    openModal: (state) => {
      state.showModal = true;
    },
  },
});

export const { openModal, closeModal } = modalSclice.actions;

export default modalSclice.reducer;
