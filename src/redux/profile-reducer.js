const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are you', counts: 4 },
    { id: 2, message: 'Boolean ||', counts: 42 },
    { id: 3, message: 'wwwwwoooooooofffff', counts: 2 },
  ],
  newPostText: 'defaultValue',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 5,
        message: state.newPostText,
        counts: 24,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [ ...state.postData ];
      stateCopy.postData.push(post);
      stateCopy.newPostText = '';
      return stateCopy;
     
    }
    case UPDATE_NEW_POST:
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
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
