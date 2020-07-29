import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "../components/login/Posts";
import NewPost from "./NewPost";

export default function Dashboard() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <NewPost />
      </header>
      <Posts />
    </div>
  );
}
