import * as clientActions from 'server/actions/client';
import * as errorActions from 'server/actions/error';
import * as serverActions from 'server/actions/server';
import * as uuid from 'uuid';

const sockets = new Map();

const register = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.REGISTER) {
    const { socket } = action.payload;
    const id = uuid.v4();
    sockets.set(id, socket);
    dispatch(clientActions.listen(id));
  }
};

const listen = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.LISTEN) {
    const socket = sockets.get(action.payload.id);
    socket.on('message', strMessage => {
      try {
        const parsedMessage = JSON.parse(strMessage);
        dispatch(serverActions.message(socket, parsedMessage));
      } catch (e) {
        dispatch(
          errorActions.wrongMessageFormat({ socket, message: strMessage })
        );
        throw e;
      }
    });
  }
};

export default [register, listen];
