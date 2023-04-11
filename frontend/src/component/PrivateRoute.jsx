import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
