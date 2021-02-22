const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you', counts: 4 },
        { id: 2, message: 'Boolean ||', counts: 42 },
        { id: 3, message: 'wwwwwoooooooofffff', counts: 2 },
      ],
      newPostText: 'defaultValue',
    },

    dialogsPage: {
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
    },
    musicPage: {},
    newsPage: {},
    settingsPage: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: 5,
        message: this._state.profilePage.newPostText,
        counts: 24,
      };
      this._state.profilePage.postData.push(post);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messageData.push({ id: 6, message: body });
      this._state.newMessageBody = '';
      this._callSubscriber(this._state);
    }
  },

  //!methods than don't change our state
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addUpdatePostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

window.store = store;

export default store;
