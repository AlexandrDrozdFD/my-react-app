import React from 'react';
import styleMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log('MyPosts props: ', props);
  const postData = props.postData;
 
  let posts = postData
    .map((post) => <Post key={post.id} message={post.message} id={post.id} counts={post.counts} />)

  let ourRef = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let refText = ourRef.current.value;
    props.updateNewPostText(refText);
  }

  return (
    <div>
      <div className={styleMyPosts.content}>
        <h3>My posts</h3>
        <textarea ref={ourRef} value={props.newPostText} onChange={onPostChange} />
        <div className={styleMyPosts.btns}>
          <button onClick={onAddPost}>Add post</button>
          <button>REMOVE</button>
        </div>
        {posts}
      </div>
      <div> C* </div>
    </div>
  )
}
export default MyPosts;