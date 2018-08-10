import * as joinActions from 'server/actions/join';
import * as nicknameActions from 'server/actions/nickname';

const decide = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === joinActions.REQUESTED) {
    dispatch(
      nicknameActions.checkAvailability(
        action.payload.nickname,
        ({ nickname, isAvailable }) => {
          action.meta.next({ isAvailable, nickname });
        }
      )
    );
  }
};

export default [decide];
