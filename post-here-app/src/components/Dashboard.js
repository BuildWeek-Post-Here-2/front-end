import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Posts from "../components/login/Posts";
import styled from "styled-components";
import NewPost from "./NewPost";
import { UserContext } from '../utils/UserContext';

export default function Dashboard() {
  const { logOut } = useContext(UserContext)

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
        p {
          font-size: 2rem;
          color: greenyellow;
        }
      }
    }
  `;
  return (
    <div className='dashboard'>
      <header>
        <nav>
          <a className="logo" href="#">Post Here</a>
          <a href="#">Home</a>
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login" onClick={logOut}>Log Out</Link>
          <a href="#">About us</a>
        </nav>
        <NewPost />
      </header>
      <Posts />
    </div>
  );
}
