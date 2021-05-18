import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={s.dialogsItems}>
      <img src={props.user.userImg} alt="avatare" />
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
        {props.user.name}
      </NavLink>
    </div>
  );
};

export default DialogsItem;
