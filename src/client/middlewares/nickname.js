import * as nicknameActions from 'actions/nickname';
import * as socketActions from 'actions/socket';

const checkAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nicknameActions.CHECK_AVAILABILITY) {
    const nickname = action.payload;
    dispatch(
      socketActions.send({
        type: '[nickname] CHECK_AVAILABILITY',
        payload: nickname
      })
    );
  }
};

const receiveAvailability = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.MESSAGE) {
    const message = action.payload;
    if ((message.type = '[nickname] AVAILABILITY')) {
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
