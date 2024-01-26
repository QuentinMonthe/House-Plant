import { createSlice } from "@reduxjs/toolkit";

const menuSclice = createSlice({
  name: "menu",
  initialState: { currentMenu: 0 },
  reducers: {
    setCurrentMenu: (state, { payload }) => {
      state.currentMenu = payload;
    },
  },
});

export const { setCurrentMenu } = menuSclice.actions;

export default menuSclice.reducer;
