import * as serverActions from 'server/actions/server';
import * as socketActions from 'server/actions/socket';

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === serverActions.CONNECTION) {
    const { socket } = action.payload;
    dispatch(socketActions.connection({ socket }));
  }
};

export default [connection];
