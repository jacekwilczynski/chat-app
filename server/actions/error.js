export const WRONG_MESSAGE_FORMAT = '[error] WRONG_MESSAGE_FORMAT';

export const wrongMessageFormat = ({ socket, message }) => ({
  type: WRONG_MESSAGE_FORMAT,
  payload: { socket, message }
});
