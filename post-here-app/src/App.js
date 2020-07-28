import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/login/signup/SignUp";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/Dashboard";

import { UserContext } from './utils/UserContext';


function App() {
  // CONTEXT STATE
  const user_id = window.localStorage.getItem('id')

  const [postList, setPostList] = useState({
    id:"",
    user_id:"",
    title:"",
    content:"",
  })


  return (
    <Router>
      <UserContext.Provider value ={{user_id, postList, setPostList}}>
        <div className="App">
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={SignUp} />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
