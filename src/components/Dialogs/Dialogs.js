import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsUserElements = props.dialogsPage.arrUserName.map((user, i) => {
    return <DialogsItem user={user} key={i} id={i} />;
  });

  let dialogsMessageElements = props.dialogsPage.arrUserDialogs.Anton.map(
    (dia, i) => {
      return <Message key={i} mes={dia.content} user={dia.sender} />;
    }
  );

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addNewMessage();
  };

  let onChangeNewDialog = () => {
    let textArea = newMessageElement.current.value;

    props.onChangeNewDialog(textArea);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.userName}>{dialogsUserElements}</div>
        <div className={s.userDialog}>{dialogsMessageElements}</div>
      </div>
      <div>
        <textarea
          ref={newMessageElement}
          onChange={onChangeNewDialog}
          value={props.dialogsPage.newDialogValue}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
