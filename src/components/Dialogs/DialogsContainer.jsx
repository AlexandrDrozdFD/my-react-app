import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  console.log('DialogsContainer props: ', props)
  let state = props.store.getState().dialogsPage;

  const handleChange = (bodyText) => {
    props.store.dispatch(updateNewMessageBodyCreator(bodyText));
  }

  const handleClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <Dialogs 
    updateNewMessageBody={handleChange} 
    sendMessageCreator={handleClick}
    newMessageBody={state.newMessageBody}
    dialogData={state.dialogData}
    messageData={state.messageData}
    />
  )
}

export default DialogsContainer;