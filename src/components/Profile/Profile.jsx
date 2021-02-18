import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('Profile props: ', props);
  const { postData, addPostMessage, newPostText, updateNewPost } = props;

  return (
    <div className={styleProfile.content}>
      <ProfileInfo />
      <MyPosts
        postData={postData} 
        addPostMessage={addPostMessage} 
        newPostText={newPostText} 
        updateNewPost={updateNewPost} />
    </div>
  )
}
export default Profile;