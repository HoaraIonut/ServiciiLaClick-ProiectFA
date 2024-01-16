import React from "react";

import { Box } from "@chakra-ui/react";

// import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginPage() {
  if (useSelector((state) => state.auth.isAuthenticated))
    return <Navigate to={"/myaccount"} replace />;
  else {
    return <Box>
      <LoginForm></LoginForm>
    </Box>;
  }
}

export default LoginPage;
