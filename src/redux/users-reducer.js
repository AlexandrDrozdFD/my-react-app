const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20, 
  currentPage: 1 
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        })
      };
    case UNFOLLOW: 
      return {
        ...state, 
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
            }
          }
          return user;
        })
      }
      case SET_USERS: 
        return {
          ...state,
          users: action.users
        } 
      case SET_CURRENT_PAGE: 
        return {
          ...state,
          currentPage: action.currentPage
        } 
      case SET_TOTAL_USERS_COUNT: 
        return {
          ...state,
          totalUsersCount: action.count
        } 
    default:
      return state;
  }
};

//!todo AC ==> action creator for dispatch({})

//! {userId: userId} ==> {userId}

export const followAC = (userId) => ({ type: FOLLOW, userId });

//! or like below

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};

export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount })

export default usersReducer;
