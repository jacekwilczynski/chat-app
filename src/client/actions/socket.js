export const JOIN = '[socket] JOIN';
export const SEND = '[socket] SEND';
export const MESSAGE = '[socket] MESSAGE';

export const join = initialData => ({
  type: JOIN,
  payload: initialData
});

export const send = message => ({
  type: SEND,
  payload: message
});

export const message = message => ({
  type: MESSAGE,
  payload: message
});
