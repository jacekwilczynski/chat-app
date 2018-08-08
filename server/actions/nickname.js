export const CHECK = '[nickname] CHECK';

export const check = nickname => ({
  type: CHECK,
  payload: nickname
});
