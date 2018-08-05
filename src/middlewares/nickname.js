import * as nicknameActions from 'actions/nickname';
import * as apiActions from 'actions/api';

const checkAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nicknameActions.CHECK_AVAILABILITY) {
    const nickname = action.payload;
    dispatch(
      apiActions.request({
        url: `/api/check-nickname/${nickname}`,
        onSuccess: nicknameActions.RECEIVE_AVAILABILITY,
        meta: { nickname }
      })
    );
  }
};

const receiveAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nicknameActions.RECEIVE_AVAILABILITY) {
    dispatch(
      nicknameActions.updateAvailability({
        nickname: action.meta.nickname,
        isAvailable: action.payload.data === true
      })
    );
  }
};

export default [checkAvailability, receiveAvailability];
