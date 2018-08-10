import * as joinActions from 'server/actions/join';
import * as nicknameActions from 'server/actions/nickname';

const requested = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === joinActions.REQUESTED) {
    dispatch(
      nicknameActions.checkAvailability(
        action.payload.nickname,
        ({ isAvailable }) => {
          action.meta.next(isAvailable);
        }
      )
    );
  }
};

export default [requested];
