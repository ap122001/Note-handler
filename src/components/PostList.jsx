import { useState } from 'react';
import Post from './Post.jsx';
import NewPost from './NewPost';
import classes from "./PostList.module.css";
import React from 'react';
import Modal from './Modal.jsx'



function PostList({isPosting, onStopPosting}){

const [posts,setPosts] =useState([]);
function postHandler(postData){
    setPosts([postData, ...posts]);
}
   return <>
        {    
           isPosting ? (<Modal changeModalVisibility={onStopPosting}>
            <NewPost  onCancel={onStopPosting} onAddPost={postHandler}></NewPost>
            </Modal>) : false
        }
        
        {posts.length>0 ?
              <ul className={classes.posts}>
                {posts.map((posts)=><Post key={posts.body} author={posts.author} body={posts.body}></Post>)}
              </ul> : 
              <div style={{textAlign:'center', color:'Grey'}}>
                <h2>There are no posts yet...</h2>
                <p>Write, What's in your head!</p>
              </div>
        }
   </>
}

export default PostList;