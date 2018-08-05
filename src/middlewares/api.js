import * as apiActions from 'actions/api';
import * as loginViewActions from 'actions/loginView';
import * as api from 'utils/api';

const checkNickname = store => next => action => {
  next(action);
  if (action.type === apiActions.CHECK_NICKNAME) {
    const nickname = action.payload;
    api.checkNickname(nickname).then(isAvailable => {
      store.dispatch(
        apiActions.receiveNicknameFeedback({
          isAvailable,
          nickname
        })
      );
    });
  }
};

const receiveNicknameFeedback = store => next => action => {
  next(action);
  if (action.type === apiActions.RECEIVE_NICKNAME_FEEDBACK) {
    store.dispatch(
      loginViewActions.updateErrorState({
        nickname: action.payload.isAvailable
          ? null
          : `Nickname '${
              action.payload.nickname
            }' is currently used by someone else.`
      })
    );
  }
};

export default [checkNickname, receiveNicknameFeedback];
