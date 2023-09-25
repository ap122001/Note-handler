import './App.css';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {

  const [isModalVisible, setIsModalVisible] =useState(false);

  function showModalHandler(){
    setIsModalVisible(true);
  }

  function changeModalVisibilityHandler(){
    
    // console.log("called");
    setIsModalVisible(false);
}
  return (
  <>
    <MainHeader onCreatePost={showModalHandler}></MainHeader>
    <main>
       <PostList isPosting={isModalVisible} onStopPosting={changeModalVisibilityHandler}></PostList>
    </main>
  </>
  );
}

export default App;
