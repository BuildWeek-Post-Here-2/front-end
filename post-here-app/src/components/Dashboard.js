import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "../components/login/Posts";
import styled from "styled-components";
import NewPost from "./NewPost";

export default function Dashboard() {
  const StyledForm = styled.div`
    background-color: #3498db;
    nav {
      display: flex;
      justify-content: space-around;
      background-color: #d7bde2;
      width: 100%;
      a {
        text-decoration: none;
        font-size: 2rem;
        color: #2e4053;
      }
    }
    .cardBox {
      display: flex;
      align-items: center;
      justify-content: center;
      .card {
        margin-top: 3rem;
        background-color: black;
        width: 50%;
        color: greenyellow;
        p {
          font-size: 2rem;
        }
      }
    }
  `;
  return (
    <div className='dashboard'>
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
