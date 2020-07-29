import React, { useContext, useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth"
import { UserContext } from '../../utils/UserContext';
import EditPosts from '../EditPost'
import axios from 'axios'

const Post = (props) => {
  const { post } = props;
  const { getData, postList, setPostList } = useContext(UserContext)
  const [subredditPrediction, setSubredditPrediction] = useState("")

  // Web API DELETE request
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

  // DS API POST request
  const prediction = e => {
    // e.preventDefault()

    axios
    .post(`https://bw-post-here-2.herokuapp.com/predict`, {
        x1: post.title,
        x2: post.content,
    })
    .then(res => {
        console.log("Submitted post to DS API", res)
        setSubredditPrediction(res.data.prediction)
        // alert("Post Submitted")
    })
    .catch(err => {
        console.log(err)
    })
}

  useEffect(() => {
    prediction()
  }, [])



  return (
    <div className="cardBox">
      <div className="card">
        <p>{post.title}</p>
        <p>{post.content}</p>
        <p>Prediction: r/{subredditPrediction}</p>
        <button id="deletebutton" 
          onClick={(e) => deletePost(e,post.id)}
        >
          Delete
        </button>
        <EditPosts id={post.id}/>
      </div>
    </div>
  );
};

export default Post;
