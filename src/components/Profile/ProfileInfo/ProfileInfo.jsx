import React from 'react';
import styleProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={styleProfileInfo.prof}>
        <div>
          <img src='https://image.shutterstock.com/image-photo/palm-tropical-beach-260nw-569532439.jpg' alt='img-beach'/>
        </div>
        <div className={styleProfileInfo.descriptionBlock}>AVATARRRRR DESCRIPTION</div>
        
    </div>
  )
}
export default ProfileInfo;