import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import settingsReducer from "./settings-reducer";
import usersReducer from "./users-reducer";


let reducers =  combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  newsPage: newsReducer,
  settingsPage: settingsReducer
})


let store = createStore(reducers);

window.store = store;
export default store;