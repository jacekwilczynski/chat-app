import * as clientActions from 'server/actions/client';
import * as errorActions from 'server/actions/error';
import * as serverActions from 'server/actions/server';

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === serverActions.CONNECTION) {
    const { socket } = action.payload;
    dispatch(clientActions.connection({ socket }));
  }
};

const send = () => next => action => {
  next(action);
  if (action.type === serverActions.SEND) {
    const { sockets, message } = action.payload;
    const serialized = JSON.stringify(message);
    for (let socket of sockets) {
      socket.send(serialized);
    }
  }
};

const sendErrors = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === errorActions.WRONG_MESSAGE_FORMAT) {
    dispatch(
      serverActions.send([action.payload.socket], {
        type: errorActions.WRONG_MESSAGE_FORMAT,
        payload: action.payload.message
      })
    );
  }
};

export default [connection, send, sendErrors];
