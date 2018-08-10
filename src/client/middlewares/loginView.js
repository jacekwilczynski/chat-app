import * as loginViewActions from 'client/actions/loginView';
import * as nicknameActions from 'client/actions/nickname';
import * as userActions from 'client/actions/user';

const input = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === loginViewActions.INPUT) {
    const event = action.payload;
    const element = event.target;
    if (element.name === 'nickname') {
      dispatch(loginViewActions.nicknameEdited(element.value));
    }
  }
};

const submit = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === loginViewActions.SUBMIT) {
    const event = action.payload;
    const form = event.target;
    const nickname = form.nickname.value;
    dispatch(userActions.join(nickname));
  }
};

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
          : `Nickname "${nickname}" is already used by someone else.`
      })
    );
  }
};

export default [input, submit, nicknameEdited, updateNicknameAvailability];
