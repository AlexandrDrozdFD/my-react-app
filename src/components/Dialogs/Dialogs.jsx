import React from "react";
import Dialog from "./Dialog/Dialog";
import styleDialogs from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log('Dialogs pops: ', props);

  const dialogs = props.dialogData
    .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)

  const messages = props.messageData
    .map((message) => <Message message={message.message} id={message.id} />)

  const handleChange = (e) => {
    let bodyText = e.target.value;
    props.updateNewMessageBody(bodyText);
  }

  const handleClick = () => {
    props.sendMessageCreator();
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
                value={props.newMessageBody} 
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