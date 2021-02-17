import React from "react";
import { NavLink } from "react-router-dom";
import styleDialogs from '../Dialogs.module.css';

const Dialog = (props) => {
  let path = `/dialog/${props.id}`;
  return (
    <div className={styleDialogs.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;