import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import styled from "styled-components";

const Posts = () => {
  // Make sure the parent of Posts is passing the right props!
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        debugger;
      });
  }, []);
  const StyledPost = styled.div`
    .cardBox {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      margin-top: 3rem;
      background-color: cornsilk;
      width: 50%;
      color: coral;
    }
    p {
      font-size: 2rem;
    }
  `;

  return (
    <StyledPost>
      {/* map through the posts here to return a Post component */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* Check the implementation of Post to see what props it requires! */}
    </StyledPost>
  );
};

export default Posts;
