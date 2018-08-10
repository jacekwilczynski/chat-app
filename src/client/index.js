import configureStore from 'configureStore';
import 'index.css';
import { injectDispatch } from 'middlewares/socket';
import Login from 'pages/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from 'registerServiceWorker';

const store = configureStore();
injectDispatch(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
