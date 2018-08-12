export const CONNECTION = '[client] CONNECTION';
export const REGISTER = '[client] REGISTER';
export const LISTEN = '[client] LISTEN';
export const MESSAGE = '[client] MESSAGE';
export const SEND = '[client] SEND';

export const connection = ({ socket }) => ({
  type: CONNECTION,
  payload: { socket }
});

export const register = ({ id, socket }) => ({
  type: REGISTER,
  payload: { id, socket }
});

export const listen = id => ({
  type: LISTEN,
  payload: { id }
});

export const message = (clientId, message) => ({
  type: MESSAGE,
  payload: { clientId, message }
});

export const send = (clientIds, message) => ({
  type: SEND,
  payload: { clientIds, message }
});
