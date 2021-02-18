import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { postData, addPostMessage } = props;
  
  return (
    <div className={styleProfile.content}>
        <ProfileInfo />
        <MyPosts postData={postData} addPostMessage={addPostMessage} />
    </div>
  )
}
export default Profile;