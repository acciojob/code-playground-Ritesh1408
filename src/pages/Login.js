import React from "react";
import { useAuth } from "../components/AuthContext";
import { Redirect } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, login } = useAuth();

  const handleLogin = () => {
    login(); 
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
