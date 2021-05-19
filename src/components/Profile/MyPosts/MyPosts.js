import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let myPostElements = props.arrPost.map((obj, i) => {
    return (
      <Post
        content={obj.content}
        like={obj.countLike}
        img={obj.userImg}
        key={i}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    if(newPostElement.current.value !== ''){
      props.addNewPost();
    }
   
  };

  let onChangeNewPost = () => {
    let textArea = newPostElement.current.value;
    props.onChangeNewPost(textArea);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onChangeNewPost}
          value={props.newPostValue}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{myPostElements}</div>
    </div>
  );
};

export default MyPosts;
