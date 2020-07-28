import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/UserContext';

const NewPost = () => {
    const { user_id, postList, setPostList } = useContext(UserContext)

    const [post, setPost] = useState({
        id:"",
        user_id:"",
        title:"",
        content:"",
        subreddit:"",
    })

    const addNewPost = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('', {
            user_id: post.user_id,
            title: post.title,
            content: post.content,
            subreddit: post.subreddit,
        })
        .then(res => {
            console.log("ADDED NEW POST", res)
            setPostList(res.data)
        })
    }

    return(
        <div className='newPost'>
            <h3>Add a Post</h3>
            <form onSubmit={addNewPost}>
                <input
    
                />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default NewPost