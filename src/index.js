import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/state';


export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPostMessage={store.addPostMessage.bind(store)}
        newPostText={store.updateNewPost.bind(store)}
        updateNewPost={store.updateNewPost.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
