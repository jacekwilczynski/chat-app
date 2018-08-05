export const INPUT = '[loginView] INPUT';
export const SUBMIT = '[loginView] SUBMIT';
export const NICKNAME_EDITED = '[loginView] NICKNAME_EDITED';
export const UPDATE_ERROR_STATE = '[loginView] UPDATE_ERROR_STATE';

export const input = event => ({
  type: INPUT,
  payload: event
});

export const submit = event => ({
  type: SUBMIT,
  payload: event
});

export const nicknameEdited = nickname => ({
  type: NICKNAME_EDITED,
  payload: nickname
});

export const updateErrorState = errors => ({
  type: UPDATE_ERROR_STATE,
  payload: errors
});
