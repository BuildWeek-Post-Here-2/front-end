import React, { useContext, useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth"
import { UserContext } from '../../utils/UserContext';
import EditPosts from '../EditPost'
import axios from 'axios'

const Post = (props) => {
  const { post } = props;
  const { getData, postList, setPostList } = useContext(UserContext)
  const [subredditPrediction, setSubredditPrediction] = useState("")

  const openModal = e => {
    e.preventDefault()
    const modal = document.querySelector('#modalTest')
    const editbutton = document.querySelector('#editButton')
    const deletebutton = document.querySelector('#deleteButton')
    modal.classList.add("open-modal")
    editbutton.classList.add("hide-button")
    deletebutton.classList.add("hide-button")
  }

  const closeModal = () => {
    const modal = document.querySelector('#modalTest')
    const editbutton = document.querySelector('#editButton')
    const deletebutton = document.querySelector('#deleteButton')
    modal.classList.remove("open-modal")
    editbutton.classList.remove("hide-button")
    deletebutton.classList.remove("hide-button")
  }

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
        <button id='editButton' onClick={openModal}>Edit</button>
        <div id="modalTest">
          <p className='exit' onClick={closeModal}>X</p>
          <EditPosts id={post.id}/>
        </div>
        <button id="deleteButton" 
          onClick={(e) => deletePost(e,post.id)}
        >
          Delete
        </button>

        <p>{post.title}</p>
        <p>{post.content}</p>
        <p>Prediction: r/{subredditPrediction}</p>

        
      </div>
    </div>
  );
};

export default Post;
