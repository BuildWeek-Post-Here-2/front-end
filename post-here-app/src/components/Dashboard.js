import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "../components/login/Posts";
import styled from "styled-components";

export default function Login() {
  const StyledForm = styled.div`
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav {
      display: flex;

      border: solid black 2px;
      background-color: blueviolet;
    }
    h3 {
      text-decoration: none;
      color: blue;
      font-size: 3rem;
    }
    .formDiv {
      border: solid black 2px;
      margin-top: 2rem;
      height: 8rem;
    }
    input {
      height: 4rem;
      width: 40rem;
      font-size: 2rem;
      background-color: cornsilk;
    }
    .formErrors {
      font-size: 2rem;
    }
    button {
      height: 4rem;
      width: 12rem;
      margin-top: 1rem;
    }
  `;
  return (
    <StyledForm>
      <header>
        <nav>
          <div className="nav-links">
            <Link to="/">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>
        <h1>Dashboard Here</h1>
      </header>
      <Posts />
    </StyledForm>
  );
}
