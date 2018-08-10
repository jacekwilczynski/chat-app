import middlewares from 'client/middlewares';
import reducer from 'client/reducer';
import { applyMiddleware, createStore } from 'redux';

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').default);
}

const configureStore = () =>
  createStore(reducer, applyMiddleware(...middlewares));

export default configureStore;
