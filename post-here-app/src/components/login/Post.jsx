// You will add code to this file
import React from "react";

const Post = (props) => {
  // Make sure the parent of Post is passing the right props!
  const { post } = props;

  return (
    <div className="cardBox">
      <div className="card">
        <p>{post.first_name}</p>
        <p>{post.last_name}</p>
        <p>{post.email}</p>
      </div>
    </div>
  );
};

export default Post;
