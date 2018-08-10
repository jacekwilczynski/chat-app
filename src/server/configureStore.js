import { applyMiddleware, createStore } from 'redux';
import middlewares from 'server/middlewares';
import reducer from 'server/reducer';

const configureStore = () =>
  createStore(reducer, applyMiddleware(...middlewares));

export default configureStore;
