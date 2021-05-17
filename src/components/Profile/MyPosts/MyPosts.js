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

  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>{myPostElements}</div>
    </div>
  );
};

export default MyPosts;
