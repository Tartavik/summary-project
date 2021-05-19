import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        arrPost={props.profilePage.arrPost}
        addNewPost={props.addNewPost}
        onChangeNewPost={props.onChangeNewPost}
        newPostValue={props.profilePage.newPostValue}
      />
    </div>
  );
};

export default Profile;
