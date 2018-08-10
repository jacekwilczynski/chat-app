export const CHECK_AVAILABILITY = '[nickname] CHECK_AVAILABILITY';
export const AVAILABILITY = '[nickname] AVAILABILITY';

export const checkAvailability = nickname => ({
  type: CHECK_AVAILABILITY,
  payload: nickname
});

export const availability = (nickname, isAvailable) => ({
  type: AVAILABILITY,
  payload: { nickname, isAvailable }
});
