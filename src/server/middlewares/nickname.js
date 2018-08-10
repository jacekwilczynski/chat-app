import * as nicknameMessages from 'common/messages/nickname';
import * as serverActions from 'server/actions/server';
import { isNicknameAvailable } from 'server/reducer';

const check = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === serverActions.MESSAGE) {
    const message = action.payload;
    if (message.type === nicknameMessages.CHECK_AVAILABILITY) {
      const { socket } = action.meta;
      const nickname = message.payload;
      const isAvailable = isNicknameAvailable(getState(), nickname);
      dispatch(
        serverActions.send(
          [socket],
          nicknameMessages.availability(nickname, isAvailable)
        )
      );
    }
  }
};

export default [check];
