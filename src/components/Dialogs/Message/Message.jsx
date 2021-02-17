import React from "react";
import styleDialogs from '../Dialogs.module.css';


const Message = (props) => {
  return (
    <div className={styleDialogs.message}>
      {props.message}
    </div>
  )
}

export default Message;