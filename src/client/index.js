import configureStore from 'client/configureStore';
import 'client/index.css';
import { injectDispatch } from 'client/middlewares/socket';
import Login from 'client/pages/Login';
import registerServiceWorker from 'client/registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore();
injectDispatch(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
