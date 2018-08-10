import * as serverActions from 'actions/server';
import { isNicknameAvailable } from 'reducer';

const check = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === serverActions.MESSAGE) {
    const message = action.payload;
    if (message.type === '[nickname] CHECK_AVAILABILITY') {
      const { socket } = action.meta;
      const nickname = message.payload;
      const isAvailable = isNicknameAvailable(getState(), nickname);
      dispatch(
        serverActions.send([socket], {
          type: '[nickname] AVAILABILITY',
          payload: {
            isAvailable,
            nickname
          }
        })
      );
    }
  }
};

export default [check];
