import * as userActions from 'actions/user';
import * as socketActions from 'actions/socket';

const join = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === userActions.JOIN) {
    dispatch(socketActions.join({ nickname: action.payload.nickname }));
  }
};

const joinAccept = ({ dispatch }) => next => action => {
  next(action);
  if (
    action.type === socketActions.messageReceived &&
    action.payload.type === 'JOIN_ACCEPT'
  ) {
    dispatch(userActions.loggedIn(action.payload));
  }
};

const loggedIn = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === userActions.loggedIn) {
    alert('Logged in!');
  }
};

export default [join, joinAccept, loggedIn];
