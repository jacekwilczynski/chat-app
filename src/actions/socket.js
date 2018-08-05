export const JOIN = '[socket] JOIN';
export const LISTEN = '[socket] LISTEN';
export const SEND = '[socket] SEND';
export const MESSAGE_RECEIVED = '[socket] MESSAGE_RECEIVED';

export const join = initialData => ({
  type: JOIN,
  payload: initialData
});

export const listen = () => ({
  type: LISTEN
});

export const send = message => ({
  type: SEND,
  payload: message
});

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  payload: message
});
