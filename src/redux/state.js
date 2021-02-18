let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you', counts: 4 },
        { id: 2, message: 'Boolean ||', counts: 42 },
        { id: 3, message: 'wwwwwoooooooofffff', counts: 2 },
      ],
      newPostText: 'defaultValue'
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
        { id: 1, message: 'Lord Fox@!!!!' },
      ],
    },
    musicPage: {},
    newsPage: {},
    settingsPage: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  
  addPostMessage() {
    
    let post = {
      id: 5,
      message: this._state.profilePage.newPostText,  //!привязали к state через this and another binds below 
      counts: 24
    }
    this._state.profilePage.postData.push(post);
    this.updateNewPost('');
    this._callSubscriber(this._state);
  },
  updateNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  
  //!methods than don't change our state
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.store = store;

export default store;
