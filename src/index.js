import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
// import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// export const renderEntireTree = (state) => {
//   };
// renderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state);
// });
