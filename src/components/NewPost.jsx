import classes from './NewPost.module.css';
import {useState} from 'react';


function NewPost(props) {

  const [enteredBody, setEnteredBody]= useState('');
  const [enteredAuthor, setEnteredAuthor]= useState('');
  function changeBodyHandler(event){
  setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event){
  setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
   event.preventDefault();
   const postData={
     author: enteredAuthor,
     body: enteredBody
   }
   console.log(postData);
   props.onAddPost(postData);
   props.onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className='classes.actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;