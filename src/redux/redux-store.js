import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import settingsReducer from "./settings-reducer";


let reducers =  combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  musicPage: musicReducer,
  newsPage: newsReducer,
  settingsPage: settingsReducer
})


let store = createStore(reducers);

export default store;