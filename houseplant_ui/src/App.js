import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Forgot from "./pages/Forgot";
// import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />

        {/* Protected access to home if user isn't log */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route> */}
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
