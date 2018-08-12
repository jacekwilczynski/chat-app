export const REGISTER = '[client] REGISTER';
export const LISTEN = '[client] LISTEN';

export const register = ({ socket }) => ({
  type: REGISTER,
  payload: { socket }
});

export const listen = id => ({
  type: LISTEN,
  payload: { id }
});
