import * as userActions from 'actions/user';
import * as apiActions from 'actions/api';

const join = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === userActions.JOIN) {
    dispatch(apiActions.connect({ nickname: action.payload.nickname }));
  }
};

export default [join];
