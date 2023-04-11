import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";
import UserProfile from "../page/UserProfile";
import BMICalculator from "../page/BMICalculator";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<BMICalculator />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user_profile" element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoute;
