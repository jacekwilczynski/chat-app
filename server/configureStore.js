import reducer from 'reducer';
import { applyMiddleware, createStore } from 'redux';
import middlewares from './middlewares';

const configureStore = () =>
  createStore(reducer, applyMiddleware(...middlewares));

export default configureStore;
