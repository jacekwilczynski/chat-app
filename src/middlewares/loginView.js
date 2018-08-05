import * as loginViewActions from 'actions/loginView';
import * as nicknameActions from 'actions/nickname';

const nicknameEdited = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === loginViewActions.NICKNAME_EDITED) {
    dispatch(nicknameActions.checkAvailability(action.payload));
  }
};

const updateNicknameAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nicknameActions.UPDATE_AVAILABILITY) {
    const { nickname, isAvailable } = action.payload;
    dispatch(
      loginViewActions.updateErrorState({
        nickname: isAvailable
          ? null
          : `Nickname ${nickname} is already used by someone else.`
      })
    );
  }
};

export default [nicknameEdited, updateNicknameAvailability];
