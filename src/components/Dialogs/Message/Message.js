import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.userSenderContainer}>{props.user}</div>
      <div>{props.mes}</div>
    </div>
  );
};

export default Message;
