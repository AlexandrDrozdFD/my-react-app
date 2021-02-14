import React from 'react';
import styleProfile from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styleProfile.content}>
        <div>
          <img src='https://image.shutterstock.com/image-photo/palm-tropical-beach-260nw-569532439.jpg' alt='img-beach'/>
        </div>
        <div>ava + descriptions</div>
        <div>
          My posts
          <div>post 1</div>
          <div>post 2 </div>
        </div>

        <div>Etc...</div>
    </div>
  )
}
export default Profile;