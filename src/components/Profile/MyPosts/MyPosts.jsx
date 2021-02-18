import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props)
  const { postData, addPostMessage } = props;

  const posts = postData
    .map((post) => <Post message={post.message} id={post.id} counts={post.counts} />)

  let ourRef = React.createRef();

  const addPost = () => {

    let refText = ourRef.current.value;
    addPostMessage(refText);
    console.log(refText)
  }


  return (
    <div>
      <div className={styleMyPosts.content}>
        <h3>My posts</h3>
        <textarea ref={ourRef}></textarea>
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