import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./resources/userSlice";
import menuReducer from "./resources/menuSlice";
import modalReducer from "./resources/modalSlice";
import plantReducer from "./resources/plantSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    modal: modalReducer,
    plant: plantReducer,
  },
});
