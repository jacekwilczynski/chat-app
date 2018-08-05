export const NICKNAME_EDITED = '[loginView] NICKNAME_EDITED';
export const UPDATE_ERROR_STATE = '[loginView] UPDATE_ERROR_STATE';

export const nicknameEdited = nickname => ({
  type: NICKNAME_EDITED,
  payload: nickname
});

export const updateErrorState = errors => ({
  type: UPDATE_ERROR_STATE,
  payload: errors
});
