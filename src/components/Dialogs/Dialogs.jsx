import React from "react";
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialog from "./Dialog/Dialog";
import styleDialogs from './Dialogs.module.css';
import Message from "./Message/Message";


const Dialogs = (props) => {
  console.log('Dialogs pops: ', props)

  let state = props.store.getState();
  const { dialogData, messageData, newMessageBody } = state.dialogsPage;
  
  const dialogs = dialogData
    .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)

  const messages = messageData
    .map((message) => <Message message={message.message} id={message.id} />)

  const handleChange = (e) => {
    let bodyText = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(bodyText));
  }

  const handleClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <div>
      <div className={styleDialogs.dialogs}>
        <div className={styleDialogs.dialogsItems}>
          {dialogs}
        </div>
        <div className={styleDialogs.messages}>
          <div>{messages}</div>
          <div>
            <div>
              <textarea 
                value={newMessageBody} 
                onChange={handleChange} 
                placeholder='Enter smt'>
              </textarea>
            </div>
            <div>
              <button onClick={handleClick}>
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;