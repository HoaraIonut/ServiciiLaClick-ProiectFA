import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAllowed = isAuthenticated;

  if (isAllowed) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }
}

export default ProtectedRoute;
