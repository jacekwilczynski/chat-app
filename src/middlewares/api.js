import { get } from 'axios';
import * as apiActions from 'actions/api';

let socket;
const socketUrl =
  process.env.REACT_APP_SOCKET_URL ||
  window.location.origin.replace('http', 'ws');

const request = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === apiActions.REQUEST) {
    const { url, onSuccess, onError, ...requestOptions } = action.payload;
    get(url, requestOptions).then(
      res => {
        dispatch({
          type: onSuccess,
          payload: res,
          meta: action.meta
        });
      },
      err => {
        dispatch({
          type: onError,
          error: true,
          payload: err,
          meta: action.meta
        });
      }
    );
  }
};

const connect = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === apiActions.CONNECT) {
    socket = new WebSocket(socketUrl);
    socket.addEventListener('open', () => {
      console.log('The WebSocket is open now.');
    });
  }
};

const connectionRejected = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === apiActions.CONNECTION_REJECTED) {
  }
};

export default [request, connect, connectionRejected];
