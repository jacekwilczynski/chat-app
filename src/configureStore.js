import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducer';
import middlewares from 'middlewares';

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').default);
}

const configureStore = () =>
  createStore(reducer, applyMiddleware(...middlewares));

export default configureStore;
