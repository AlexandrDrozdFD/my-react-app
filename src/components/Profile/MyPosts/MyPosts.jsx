import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const postData = [
    { id: 1, message: 'Hi, how are you', counts: 4 },
    { id: 2, message: 'Boolean ||', counts: 42 },
    { id: 3, message: 'wwwwwoooooooofffff', counts: 2 }
  ]

  const posts = postData
    .map((post) => <Post message={post.message} id={post.id} counts={post.counts} />)

  return (
    <div>
      <div className={styleMyPosts.content}>
        <h3>My posts</h3>
        <textarea></textarea>
        <div className={styleMyPosts.btns}>
          <button>Add post</button>
          <button>REMOVE</button>
        </div>
        {posts}

      </div>

      <div> C* </div>
    </div>
  )
}
export default MyPosts;