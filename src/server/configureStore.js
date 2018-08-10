import middlewares from 'middlewares';
import reducer from 'reducer';
import { applyMiddleware, createStore } from 'redux';

const configureStore = () =>
  createStore(reducer, applyMiddleware(...middlewares));

export default configureStore;
