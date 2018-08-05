export const INPUT_NICKNAME = '[loginView] INPUT_NICKNAME';
export const CHANGE_ERROR_STATE = '[loginView] CHANGE_ERROR_STATE';

export const inputNickname = nickname => ({
  type: INPUT_NICKNAME,
  payload: nickname
});

export const changeErrorState = errors => ({
  type: CHANGE_ERROR_STATE,
  payload: errors
});
