const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are you', counts: 4 },
    { id: 2, message: 'Boolean ||', counts: 42 },
    { id: 3, message: 'wwwwwoooooooofffff', counts: 2 },
  ],
  newPostText: 'defaultValue',
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText,
        counts: 24,
      };
      state.postData.push(post);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addUpdatePostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export default profileReducer;
