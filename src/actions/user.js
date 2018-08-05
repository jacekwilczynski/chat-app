export const JOIN = '[user] JOIN';

export const join = nickname => ({
  type: JOIN,
  payload: { nickname }
});
