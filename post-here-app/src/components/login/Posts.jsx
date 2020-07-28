import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

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

  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
