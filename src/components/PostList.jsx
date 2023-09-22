import { useState } from 'react';
import Post from './Post.jsx';
import NewPost from './NewPost';
import classes from "./PostList.module.css";
import React from 'react';
import Modal from './Modal.jsx'



function PostList(){
    const [enteredBody, setEnteredBody]= useState('');
    const [enteredAuthor, setEnteredAuthor]= useState('');
    const [isModalVisible, setIsModalVisible] =useState(true);
    function changeBodyHandler(event){
    setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
    setEnteredAuthor(event.target.value);
    }
    function changeModalVisibilityHandler(){
    
        // console.log("called");
        setIsModalVisible(false);
    }
   return <>
        {    
           isModalVisible ? (<Modal changeModalVisibility={changeModalVisibilityHandler}>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}></NewPost>
            </Modal>) : false
        }



    <ul className={classes.posts}>
     
     <Post author={enteredAuthor} body={enteredBody}></Post>
     <Post author="abhinav" body="everyone helo"></Post>
   </ul>
   </>
}

export default PostList;