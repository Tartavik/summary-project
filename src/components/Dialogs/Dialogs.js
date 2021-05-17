import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsUserElements = props.arrUserName.map((user, i) => {
    return <DialogsItem user={user} key={i} id={i} />;
  });
  
  let dialogsMessageElements = props.arrUserDialog.map((dia, i) => {
    return <Message key={i} mes={dia} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.userName}>{dialogsUserElements}</div>
      <div className={s.userDialog}>{dialogsMessageElements}</div>
    </div>
  );
};


export default Dialogs;
