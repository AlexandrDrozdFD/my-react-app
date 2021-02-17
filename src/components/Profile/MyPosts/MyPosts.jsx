import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props)
  const { postData } = props

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