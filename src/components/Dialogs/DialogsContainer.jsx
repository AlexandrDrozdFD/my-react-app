import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   console.log('DialogsContainer props: ', props)
//   let state = props.store.getState().dialogsPage;

//   const handleChange = (bodyText) => {
//     props.store.dispatch(updateNewMessageBodyCreator(bodyText));
//   }

//   const handleClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   }

//   return (
//     <Dialogs 
//     updateNewMessageBody={handleChange} 
//     sendMessageCreator={handleClick}
//     newMessageBody={state.newMessageBody}
//     dialogData={state.dialogData}
//     messageData={state.messageData}
//     />
//   )
// }

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
    dialogData: state.dialogsPage.dialogData,
    messageData: state.dialogsPage.messageData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (bodyText) => {
      dispatch(updateNewMessageBodyCreator(bodyText))
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator());
    }
  }
}

//! create container component in react-redux 
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;