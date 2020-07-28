import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../utils/UserContext';

const NewPost = () => {
    const { user_id, postList, setPostList } = useContext(UserContext)

    const [postToEdit, setPostToEdit] = useState({
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
            user_id: user_id,
            title: postToEdit.title,
            content: postToEdit.content,
            subreddit: postToEdit.subreddit,
        })
        .then(res => {
            console.log("ADDED NEW POST", res)
            // setPostList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChangeHandler = e => {
        setPostToEdit({
            ...postToEdit, [e.target.name]: e.target.value
        })
        // console.log(plant)
    }

    return(
        <div className='newPost'>
            <h3>Add a Post</h3>
            <form onSubmit={addNewPost}>
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
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default NewPost