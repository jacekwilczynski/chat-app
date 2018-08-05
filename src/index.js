import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from 'configureStore';
import { Provider } from 'react-redux';
import Login from 'pages/Login';
import 'index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
