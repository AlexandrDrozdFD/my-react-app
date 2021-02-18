import React from 'react';
import stylePost from './Post.module.css';

const Post = (props) => {
  const { message, counts } = props;

  return (
    <div className={stylePost.item}>
      <img src='https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg' alt='avatar-mrBean' />
      post 1
      <div>
        <span>{message}</span>
        <div>
        <span>like: {counts}</span>

        </div>
      </div>
    </div>
  )
}
export default Post;