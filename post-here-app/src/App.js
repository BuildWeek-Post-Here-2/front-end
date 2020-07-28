import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
