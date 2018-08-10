export const CHECK_AVAILABILITY = '[nickname] CHECK_AVAILABILITY';

export const checkAvailability = (nickname, next) => ({
  type: CHECK_AVAILABILITY,
  payload: nickname,
  meta: { next }
});
