export const CHECK_AVAILABILITY = '[nickname] CHECK_AVAILABILITY';
export const UPDATE_AVAILABILITY = '[nickname] UPDATE_AVAILABILITY';

export const checkAvailability = nickname => ({
  type: CHECK_AVAILABILITY,
  payload: nickname,
  meta: { throttle: 250 }
});
export const updateAvailability = ({ nickname, isAvailable }) => ({
  type: UPDATE_AVAILABILITY,
  payload: {
    nickname,
    isAvailable
  }
});
