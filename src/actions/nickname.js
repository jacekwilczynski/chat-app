export const CHECK_AVAILABILITY = '[nickname] CHECK_AVAILABILITY';
export const RECEIVE_AVAILABILITY = '[nickname] RECEIVE_AVAILABILITY';
export const UPDATE_AVAILABILITY = '[nickname] UPDATE_AVAILABILITY';

export const checkAvailability = nickname => ({
  type: CHECK_AVAILABILITY,
  payload: nickname,
  meta: {
    throttle: 500
  }
});

export const receiveAvailability = (response, meta) => ({
  type: RECEIVE_AVAILABILITY,
  payload: response,
  meta
});

export const updateAvailability = ({ nickname, isAvailable }) => ({
  type: UPDATE_AVAILABILITY,
  payload: {
    nickname,
    isAvailable
  }
});
