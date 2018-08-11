export const REGISTER = '[client] REGISTER';
export const LISTEN = '[client] LISTEN';

export const register = ({ id, socket }) => ({
  type: REGISTER,
  payload: { id, socket }
});

export const listen = id => ({
  type: LISTEN,
  payload: { id }
});
