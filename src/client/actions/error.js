export const WRONG_MESSAGE_FORMAT = '[error] WRONG_MESSAGE_FORMAT';

export const wrongMessageFormat = message => ({
  type: WRONG_MESSAGE_FORMAT,
  payload: { message }
});
