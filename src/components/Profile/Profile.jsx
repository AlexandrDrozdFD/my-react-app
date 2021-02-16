import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProfile from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styleProfile.content}>
        <div>
          <img src='https://image.shutterstock.com/image-photo/palm-tropical-beach-260nw-569532439.jpg' alt='img-beach'/>
        </div>
        <div>ava + descriptions</div>
        <MyPosts />
    </div>
  )
}
export default Profile;