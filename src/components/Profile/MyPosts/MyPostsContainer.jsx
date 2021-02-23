import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, addUpdatePostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(addUpdatePostActionCreator(text))
    }, 
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;