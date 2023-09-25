
import Post from './Post.jsx';
import NewPost from './NewPost';
import classes from "./PostList.module.css";
import React from 'react';
import Modal from './Modal.jsx'



function PostList({isPosting, onStopPosting}){


   return <>
        {    
           isPosting ? (<Modal changeModalVisibility={onStopPosting}>
            <NewPost  onCancel={onStopPosting}></NewPost>
            </Modal>) : false
        }



    <ul className={classes.posts}>
     <Post author="abhinav" body="everyone helo"></Post>
   </ul>
   </>
}

export default PostList;