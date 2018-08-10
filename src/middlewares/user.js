import * as socketActions from 'actions/socket';
import * as userActions from 'actions/user';

const join = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === userActions.JOIN) {
    dispatch(socketActions.join({ nickname: action.payload.nickname }));
  }
};

const joinAccept = ({ dispatch }) => next => action => {
  next(action);
  if (
    action.type === socketActions.message &&
    action.payload.type === 'JOIN_ACCEPT'
  ) {
    dispatch(userActions.loggedIn(action.payload));
  }
};

export default [join, joinAccept];
