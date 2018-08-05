import * as loginViewActions from 'actions/loginView';
import * as apiActions from 'actions/api';

const inputNickname = store => next => action => {
  next(action);
  if (action.type === loginViewActions.INPUT_NICKNAME) {
    store.dispatch(apiActions.checkNickname(action.payload));
  }
};

export default [inputNickname];
