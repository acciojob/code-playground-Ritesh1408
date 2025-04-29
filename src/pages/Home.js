import React from "react";
import { useAuth } from "../components/AuthContext";

const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Hi Welcome to Code PlayGround</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
