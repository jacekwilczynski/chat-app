import * as nicknameActions from 'server/actions/nickname';
import { isNicknameAvailable } from 'server/reducer';

const checkAvailability = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === nicknameActions.CHECK_AVAILABILITY) {
    const nickname = action.payload;
    const isAvailable = isNicknameAvailable(getState(), nickname);
    action.meta.next({ nickname, isAvailable });
  }
};

export default [checkAvailability];
