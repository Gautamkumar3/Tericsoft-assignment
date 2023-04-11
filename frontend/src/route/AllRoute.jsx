import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";
import UserProfile from "../page/UserProfile";
import BMICalculator from "../page/BMICalculator";
import PrivateRoute from "../component/PrivateRoute";
import BMIHistory from "../page/BMIHistory";

const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <BMICalculator />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/user_profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route path="bmi_history" element={<BMIHistory />} />
    </Routes>
  );
};

export default AllRoute;
