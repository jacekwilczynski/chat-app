import * as joinActions from 'client/actions/join';
import * as socketActions from 'client/actions/socket';
import * as joinMessages from 'common/messages/join';

const request = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === joinActions.REQUEST) {
    dispatch(socketActions.send(joinMessages.request(action.payload.nickname)));
  }
};

export default [request];
