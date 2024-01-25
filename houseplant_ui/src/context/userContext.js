// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const login = () => {};

  const logout = () => {};

  return (
    <UserContextProvider value={{ login, logout }}>
      {props.chilfren}
    </UserContextProvider>
  );
};
