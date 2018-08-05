import * as actions from 'actions/loginView';
import { checkNickname } from 'api';

const inputNickname = store => next => action => {
  if (action.type === actions.INPUT_NICKNAME) {
    const nickname = action.payload;
    checkNickname(nickname).then(isAvailable =>
      store.dispatch(
        actions.changeErrorState({
          nickname: isAvailable
            ? null
            : `Nickname '${nickname}' is currently used by someone else.`
        })
      )
    );
  }
  next(action);
};

export default [inputNickname];
