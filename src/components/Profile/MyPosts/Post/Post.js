import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.img} alt='avatar'/>
      {props.content}
      <div>
        <span>Like </span>
        <span>{props.like}</span>
      </div>
    </div>
  );
};

export default Post;
