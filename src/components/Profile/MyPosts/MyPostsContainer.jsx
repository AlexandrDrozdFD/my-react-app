import React from 'react';
import { addPostActionCreator, addUpdatePostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  console.log('MyPostsContainer props: ', props);
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    props.store.dispatch(addUpdatePostActionCreator(text));
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  )
}
export default MyPostsContainer;