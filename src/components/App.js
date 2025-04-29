import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import "./../styles/App.css";

const Navbar = ({ onHomeClick }) => {

  return (
    <nav>
      <ul>
        <li><Link to="/home" onClick={onHomeClick}>Playground</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [showHomeMessage, setShowHomeMessage] = useState(false);

  const handleHomeClick = () => {
    // if (isAuthenticated) setShowHomeMessage(true);
    setShowHomeMessage(true);
  };

  return (
    <>
      <Navbar onHomeClick={handleHomeClick} />
      <div className="main-container">
        <p>
          {isAuthenticated
            ? "Logged in, Now You can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>
        {isAuthenticated && showHomeMessage}
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>

      
      </div>
    </>
  );
};


const App = () => {

  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
