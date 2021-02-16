import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const postData = [
    { id: 1, message: 'Hi, how are you', counts: 4 },
    { id: 2, message: 'Boolean ||', counts: 42 },
    { id: 3, message: 'wwwwwoooooooofffff', counts: 2 }
  ]

  return (
    <div>
      <div className={styleMyPosts.content}>
        <h3>My posts</h3>
        <textarea></textarea>
        <div className={styleMyPosts.btns}>
          <button>Add post</button>
          <button>REMOVE</button>
        </div>
        <Post message={postData[0].message} counts={postData[0].counts} />
        <Post message={postData[1].message} counts={postData[1].counts} />
        <Post message={postData[2].message} counts={postData[2].counts} />

      </div>

      <div> C* </div>
    </div>
  )
}
export default MyPosts;