const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogData: [
    { id: 1, name: 'Dim' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  messageData: [
    { id: 1, message: 'hello !!!' },
    { id: 2, message: 'Lord Fox@!!!!' },
    { id: 3, message: 'Lord Fox' },
    { id: 4, message: 'Lord !' },
    { id: 5, message: 'Lor' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE:
      let stateCopy = { ...state };
      let body = stateCopy.newMessageBody;
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push({ id: 6, message: body });
      stateCopy.newMessageBody = '';
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
