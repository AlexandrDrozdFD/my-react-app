import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('Profile props: ', props);
  const { postData } = props;

  return (
    <div className={styleProfile.content}>
      <ProfileInfo />
      <MyPosts
        postData={postData} 
        dispatch={props.dispatch} />
    </div>
  )
}
export default Profile;