import * as socketActions from 'actions/socket';
import configureSocket from 'middlewares/socket/configure';

const { socket, injectDispatch: inject } = configureSocket();
export const injectDispatch = inject;

const send = () => next => action => {
  next(action);
  if (action.type === socketActions.SEND) {
    socket.send(JSON.stringify(action.payload));
  }
};

export default [send];
