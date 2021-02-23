import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styleProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('Profile props: ', props);
  
  return (
    <div className={styleProfile.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
export default Profile;