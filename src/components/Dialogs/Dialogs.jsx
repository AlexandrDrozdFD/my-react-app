import React from "react";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import styleDialogs from './Dialogs.module.css';
import Message from "./Message/Message";
 
const Dialogs = (props) => {
  const { dialog: dialogData, message: messageData } = props;

  const dialogs = dialogData
    .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)
  
  const messages = messageData
    .map((message) => <Message message={message.message} id={message.id} />)

  return (
    <div>
      <div className={styleDialogs.dialogs}>
        <div className={styleDialogs.dialogsItems}>
          {dialogs}

        </div>
        <div className={styleDialogs.messages}>
          {messages}

        </div>
      </div>
    </div>
  )
}

export default Dialogs;