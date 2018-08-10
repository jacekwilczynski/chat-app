import * as nicknameActions from 'client/actions/nickname';
import * as socketActions from 'client/actions/socket';
import * as nicknameMessages from 'common/messages/nickname';

const checkAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nicknameActions.CHECK_AVAILABILITY) {
    const nickname = action.payload;
    dispatch(socketActions.send(nicknameMessages.checkAvailability(nickname)));
  }
};

const receiveAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.MESSAGE) {
    const message = action.payload;
    if (message.type === nicknameMessages.AVAILABILITY) {
      const { nickname, isAvailable } = message.payload;
      dispatch(
        nicknameActions.updateAvailability({
          nickname,
          isAvailable
        })
      );
    }
  }
};

export default [checkAvailability, receiveAvailability];
