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
    {id: 1, message:'Lord Fox'}
  ]

  return (
    <div>
      <div className={styleDialogs.dialogs}>
        <div className={styleDialogs.dialogsItems}>

          <Dialog name={dialogData[0].name} id={dialogData[0].id} />
          <Dialog name={dialogData[1].name} id={dialogData[1].id} />

        </div>
        <div className={styleDialogs.messages}>
          <Message message={messageData[0].message} />
          <Message message={messageData[1].message} />

        </div>
      </div>
    </div>
  )
}

export default Dialogs;