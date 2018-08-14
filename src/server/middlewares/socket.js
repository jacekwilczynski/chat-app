import * as socketActions from 'server/actions/socket';
import * as uuid from 'uuid';

const sockets = new Map();

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.CONNECTION) {
    const { socket } = action.payload;
    const id = uuid.v4();
    dispatch(socketActions.register({ id, socket }));
  }
};

const register = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.REGISTER) {
    const { id, socket } = action.payload;
    sockets.set(id, socket);
    dispatch(socketActions.listen(id));
  }
};

const listen = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.LISTEN) {
    const { id } = action.payload;
    const socket = sockets.get(id);
    socket.on('message', strMessage => {
      let parsedMessage;
      try {
        parsedMessage = JSON.parse(strMessage);
      } catch (e) {
        return;
      }
      dispatch(socketActions.message(id, parsedMessage));
    });
  }
};

const send = () => next => action => {
  next(action);
  if (action.type === socketActions.SEND) {
    const { clientIds, message } = action.payload;
    const serialized = JSON.stringify(message);
    clientIds
      .map(id => sockets.get(id))
      .forEach(socket => socket.send(serialized));
  }
};

export default [connection, register, listen, send];
