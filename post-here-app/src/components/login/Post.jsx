import React, { useContext, useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { UserContext } from "../../utils/UserContext";
import EditPosts from "../EditPost";
import axios from "axios";
import styled from "styled-components";

const Post = (props) => {
  const { post } = props;
  const { getData, postList, setPostList } = useContext(UserContext);
  const [subredditPrediction, setSubredditPrediction] = useState("");

  // Web API DELETE request
  const deletePost = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log("Post Deleted", res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DS API POST request
  const prediction = (e) => {
    // e.preventDefault()

    axios
      .post(`https://bw-post-here-2.herokuapp.com/predict`, {
        x1: post.title,
        x2: post.content,
      })
      .then((res) => {
        console.log("Submitted post to DS API", res);
        setSubredditPrediction(res.data.prediction);
        // alert("Post Submitted")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    prediction();
  }, []);
  const StyledForm = styled.div`
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
        button {
          margin-bottom: 1rem;
        }
      }
    }
  `;
  return (
    <StyledForm>
      <div className="cardBox">
        <div className="card">
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>Prediction: r/{subredditPrediction}</p>
          <EditPosts id={post.id} />
          <button id="deletebutton" onClick={(e) => deletePost(e, post.id)}>
            Delete
          </button>
        </div>
      </div>
    </StyledForm>
  );
};

export default Post;
