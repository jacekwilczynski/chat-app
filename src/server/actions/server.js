export const LISTENING = '[server] LISTENING';
export const CONNECTION = '[server] CONNECTION';
export const MESSAGE = '[server] MESSAGE';
export const SEND = '[server] SEND';

export const listening = ({ port }) => ({
  type: LISTENING,
  meta: { port }
});

export const connection = ({ socket, request }) => ({
  type: CONNECTION,
  payload: {
    socket,
    request
  }
});

export const message = ({ socket, message }) => ({
  type: MESSAGE,
  payload: message,
  meta: {
    socket
  }
});

export const send = (sockets, message) => ({
  type: SEND,
  payload: { sockets, message }
});
