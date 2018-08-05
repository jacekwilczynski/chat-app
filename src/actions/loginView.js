export const INPUT_NICKNAME = '[loginView] INPUT_NICKNAME';
export const UPDATE_ERROR_STATE = '[loginView] UPDATE_ERROR_STATE';

export const inputNickname = nickname => ({
  type: INPUT_NICKNAME,
  payload: nickname
});

export const updateErrorState = errors => ({
  type: UPDATE_ERROR_STATE,
  payload: errors
});
