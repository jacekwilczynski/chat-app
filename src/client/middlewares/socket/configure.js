import * as errorActions from 'client/actions/error';
import * as socketActions from 'client/actions/socket';

const configureSocket = () => {
  const socketUrl =
    process.env.REACT_APP_SOCKET_URL ||
    window.location.origin.replace('http', 'ws');
  const socket = new WebSocket(socketUrl);
  let dispatch;
  socket.addEventListener('message', event => {
    try {
      const message = JSON.parse(event.data);
      dispatch(socketActions.message(message));
    } catch (e) {
      dispatch(errorActions.wrongMessageFormat(event.data));
    }
  });
  return {
    socket,
    injectDispatch: d => {
      dispatch = d;
    }
  };
};

export default configureSocket;
