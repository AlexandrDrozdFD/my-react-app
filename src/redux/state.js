import { renderEntireTree } from "../render";

const state = {
  profilePage: {
    postData: [
      { id: 1, message: 'Hi, how are you', counts: 4 },
      { id: 2, message: 'Boolean ||', counts: 42 },
      { id: 3, message: 'wwwwwoooooooofffff', counts: 2 },
    ],
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
};

export default state;

export const addPostMessage = (postMessage) => {
  let post = {
    id: 5,
    message: postMessage,
    counts: 24
  }
  state.profilePage.postData.push(post);
  renderEntireTree(state);
}