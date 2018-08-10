import * as errorActions from 'actions/error';
import * as serverActions from 'actions/server';

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === serverActions.CONNECTION) {
    const { socket } = action.payload;
    socket.on('message', strMessage => {
      try {
        const parsedMessage = JSON.parse(strMessage);
        dispatch(serverActions.message({ socket, message: parsedMessage }));
      } catch (e) {
        dispatch(
          errorActions.wrongMessageFormat({ socket, message: strMessage })
        );
      }
    });
  }
};

const send = () => next => action => {
  next(action);
  if (action.type === serverActions.SEND) {
    const { sockets, message } = action.payload;
    for (let socket of sockets) {
      socket.send(JSON.stringify(message));
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
