export const JOIN = '[user] JOIN';
export const LOGGED_IN = '[user] LOGGED_IN';

export const join = nickname => ({
  type: JOIN,
  payload: { nickname }
});

export const loggedIn = payload => ({
  type: LOGGED_IN,
  payload
});
