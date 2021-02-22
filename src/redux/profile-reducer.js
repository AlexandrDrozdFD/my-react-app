const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


const profileReducer = (state, action) => {
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
