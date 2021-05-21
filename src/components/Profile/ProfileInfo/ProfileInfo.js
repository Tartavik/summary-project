import React from "react";
import s from "./ProfileInfo.module.css";
console.log('sdf');
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="#"
        />
      </div>
      <div className={s.profileInfoBlock}>ava</div>
    </div>
  );
};

export default ProfileInfo;
