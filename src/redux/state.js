import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },

  //!methods than don't change our state
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
