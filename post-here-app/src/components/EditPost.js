import React, { useState, useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../utils/UserContext';

const EditPost = (props) => {
    const { user_id, getData } = useContext(UserContext)

    const [postToEdit, setPostToEdit] = useState({
        id:"",
        user_id:"",
        title:"",
        content:"",
        subreddit:"",
    })

    const editPost = (e, id) => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/api/posts/${id}`, {
            user_id: user_id,
            title: postToEdit.title,
            content: postToEdit.content,
            subreddit: postToEdit.subreddit,
        })
        .then(res => {
          console.log("Post Changed", res)
          setPostToEdit({
            user_id: user_id,
            title: postToEdit.title,
            content: postToEdit.content,
            subreddit: postToEdit.subreddit,
          })
          getData()
        })
        .catch(err => {
          console.log(err)
        })
      }

    const onChangeHandler = e => {
        setPostToEdit({
            ...postToEdit, [e.target.name]: e.target.value
        })
    }

    return(
        <div className='newPost'>
            <h3>Update a Post</h3>
            <form>
                <input
                    type="text"
                    name="title"
                    value={postToEdit.title}
                    onChange={onChangeHandler}
                    placeholder="title"
                />
                <input
                    type="text"
                    name="content"
                    value={postToEdit.content}
                    onChange={onChangeHandler}
                    placeholder="content"
                />
                <button id="editbutton" onClick={(e) => editPost(e, props.id)}>Submit Changes</button>
            </form>
        </div>
    )
}

export default EditPost