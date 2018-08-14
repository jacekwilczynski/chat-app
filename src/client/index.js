import * as socketActions from 'client/actions/socket';
import configureStore from 'client/configureStore';
import 'client/index.css';
import Login from 'client/pages/Login';
import registerServiceWorker from 'client/registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(socketActions.listen());

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
