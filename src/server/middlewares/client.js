import * as clientActions from 'server/actions/client';
import * as errorActions from 'server/actions/error';
import * as uuid from 'uuid';

const sockets = new Map();

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.CONNECTION) {
    const { socket } = action.payload;
    const id = uuid.v4();
    dispatch(clientActions.register({ id, socket }));
  }
};

const register = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.REGISTER) {
    const { id, socket } = action.payload;
    sockets.set(id, socket);
    dispatch(clientActions.listen(id));
  }
};

const listen = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.LISTEN) {
    const { id } = action.payload;
    const socket = sockets.get(id);
    socket.on('message', strMessage => {
      let parsedMessage;
      try {
        parsedMessage = JSON.parse(strMessage);
      } catch (e) {
        dispatch(
          errorActions.wrongMessageFormat({ socket, message: strMessage })
        );
        return;
      }
      dispatch(clientActions.message(id, parsedMessage));
    });
  }
};

const send = () => next => action => {
  next(action);
  if (action.type === clientActions.SEND) {
    const { clientIds, message } = action.payload;
    const serialized = JSON.stringify(message);
    clientIds
      .map(id => sockets.get(id))
      .forEach(socket => socket.send(serialized));
  }
};

export default [connection, register, listen, send];
