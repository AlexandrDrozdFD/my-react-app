import React from "react";
import { NavLink } from "react-router-dom";
import styleDialogs from './Dialogs.module.css';

const Dialog = (props) => {
  let path = `/dialog/${props.id}`;
  return (
    <div className={styleDialogs.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styleDialogs.message}>
      {props.message}
    </div>
  )
}


const Dialogs = (props) => {
  
  const dialogData = [
    {id: 1, name:'Dim'},
    {id: 2, name:'Andrey'},
    {id: 3, name:'Sveta'},
    {id: 4, name:'Sasha'},
    {id: 5, name:'Victor'},
    {id: 6, name:'Valera'}
  ];

  const messageData = [
    {id: 1, message:'hello !!!'},
    {id: 1, message:'Lord Fox@!!!!'}
  
  ]

  const dialogs = dialogData
    .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)
  
  const messages = messageData
    .map((message) => <Dialog name={message.message} id={message.id} />)
 

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