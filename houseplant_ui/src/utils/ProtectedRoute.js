import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoute = () => {
  const { user_id, success } = useSelector((state) => state.user);
  let location = useLocation();

  const isLoggedIn = !(user_id === null);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={success ? "/" : "/login"}
      state={{ from: location }}
      replace
    />
  );
};

export default ProtectedRoute;
