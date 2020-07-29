import React, { useContext } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth"
import { UserContext } from '../../utils/UserContext';
import EditPosts from '../EditPost'

const Post = (props) => {
  const { post } = props;
  const { getData } = useContext(UserContext)

  const deletePost = (e, id) => {
    e.preventDefault()
    axiosWithAuth()
    .delete(`/api/posts/${id}`)
    .then(res => {
      console.log("Post Deleted", res)
      getData()
    })
    .catch(err => {
      console.log(err)
    })
  }




  return (
    <div className="cardBox">
      <div className="card">
        <p>{post.title}</p>
        <p>{post.content}</p>
        <button id="deletebutton" onClick={(e) => deletePost(e,post.id)}>Delete</button>
        <EditPosts id={post.id}/>
      </div>
    </div>
  );
};

export default Post;
