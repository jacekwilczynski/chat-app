export const LISTEN = '[socket] LISTEN';
export const SEND = '[socket] SEND';
export const MESSAGE = '[socket] MESSAGE';

export const listen = () => ({
  type: LISTEN
});

export const send = message => ({
  type: SEND,
  payload: message
});

export const message = message => ({
  type: MESSAGE,
  payload: message
});
