import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={styleProfile.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
  )
}
export default Profile;