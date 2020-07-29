import React, { useEffect, useState, useContext } from "react";
import Post from "./Post";
import styled from "styled-components";
import { UserContext } from "../../utils/UserContext";

const Posts = () => {
  // Make sure the parent of Posts is passing the right props!
  // const [posts, setPosts] = useState([]);

  const { postList, getData } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);
  const StyledPost = styled.div``;

  return (
    <StyledPost>
      {/* map through the posts here to return a Post component */}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* Check the implementation of Post to see what props it requires! */}
    </StyledPost>
  );
};

export default Posts;
