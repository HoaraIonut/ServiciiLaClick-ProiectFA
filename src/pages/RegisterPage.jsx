import React from "react";
import { Box } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  if (useSelector((state) => state.auth.isAuthenticated))
    return <Navigate to={"/myaccount"} replace />;
  else {
    return (
      <Box>
        <RegisterForm></RegisterForm>
      </Box>
    );
  }
}

export default RegisterPage;
