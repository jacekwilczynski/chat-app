export const LISTENING = '[server] LISTENING';
export const CONNECTION = '[server] CONNECTION';

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
