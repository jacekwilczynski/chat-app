export const CONNECTION = '[socket] CONNECTION';
export const REGISTER = '[socket] REGISTER';
export const LISTEN = '[socket] LISTEN';
export const MESSAGE = '[socket] MESSAGE';
export const SEND = '[socket] SEND';

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
