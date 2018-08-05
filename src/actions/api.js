export const CHECK_NICKNAME = '[api] CHECK_NICKNAME';
export const RECEIVE_NICKNAME_FEEDBACK = '[api] RECEIVE_NICKNAME_FEEDBACK';

export const checkNickname = nickname => ({
  type: CHECK_NICKNAME,
  payload: nickname
});

export const receiveNicknameFeedback = ({ isAvailable, nickname }) => ({
  type: RECEIVE_NICKNAME_FEEDBACK,
  payload: {
    isAvailable,
    nickname
  }
});
