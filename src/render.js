import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPostMessage } from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPostMessage={addPostMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export { renderEntireTree };