import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "../components/login/Posts";

export default function Login() {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
      <h1>Dashboard Here</h1>
      <Posts />
    </header>
  );
}
