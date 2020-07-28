// You will add code to this file
import React from "react";

const Post = (props) => {
  // Make sure the parent of Post is passing the right props!
  const { post } = props;

  return (
    <div>
      <h1>{post.id}</h1>
    </div>
  );
};

export default Post;
