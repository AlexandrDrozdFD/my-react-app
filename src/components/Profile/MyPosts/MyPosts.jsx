import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log('MyPosts props: ', props);
  const { postData, addPostMessage, newPostText, updateNewPost } = props;

  const posts = postData
    .map((post) => <Post message={post.message} id={post.id} counts={post.counts} />)

  let ourRef = React.createRef();

  const addPost = () => {
    addPostMessage();
  }

  const onPostChange = () => {
    let refText = ourRef.current.value;
    updateNewPost(refText);
  }

  return (
    <div>
      <div className={styleMyPosts.content}>
        <h3>My posts</h3>
        <textarea ref={ourRef} value={newPostText} onChange={onPostChange} />
        <div className={styleMyPosts.btns}>
          <button onClick={addPost}>Add post</button>
          <button>REMOVE</button>
        </div>
        {posts}

      </div>

      <div> C* </div>
    </div>
  )
}
export default MyPosts;