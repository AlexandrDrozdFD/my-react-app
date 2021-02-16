import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
    
        <div>
          My posts
          <textarea></textarea>
          <button>Add post</button>
          <button>REMOVE</button>
          <Post message='Hi, how are you' />
          <Post message='My first post!' counts='354'/>
          <Post counts='2000'/>
          <Post />
          <Post />
          <Post />
        </div>

        <div> Etc...==> </div>
    </div>
  )
}
export default MyPosts;