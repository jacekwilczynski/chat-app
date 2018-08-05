import * as socketActions from 'actions/socket';

let socket;
const socketUrl =
  process.env.REACT_APP_SOCKET_URL ||
  window.location.origin.replace('http', 'ws');

const join = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.JOIN) {
    socket = new WebSocket(socketUrl);
    socket.addEventListener('open', () => {
      dispatch(socketActions.listen());
      dispatch(
        socketActions.send({
          type: 'JOIN_REQUEST',
          payload: action.payload
        })
      );
    });
  }
};

const listen = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.LISTEN) {
    socket.addEventListener('message', event => {
      dispatch(socketActions.messageReceived(JSON.parse(event.data)));
    });
  }
};

const send = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.SEND) {
    socket.send(JSON.stringify(action.payload));
  }
};

export default [join, listen, send];
