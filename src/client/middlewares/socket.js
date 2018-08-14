import * as errorActions from 'client/actions/error';
import * as socketActions from 'client/actions/socket';
import configureSocket from './socket/configure';

const socket = configureSocket();

const listen = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.LISTEN) {
    socket.addEventListener('message', event => {
      try {
        const message = JSON.parse(event.data);
        dispatch(socketActions.message(message));
      } catch (e) {
        dispatch(errorActions.wrongMessageFormat(event.data));
      }
    });
  }
};

const send = () => next => action => {
  next(action);
  if (action.type === socketActions.SEND) {
    socket.send(JSON.stringify(action.payload));
  }
};

export default [listen, send];
