import * as clientActions from 'server/actions/client';
import * as serverActions from 'server/actions/server';

const connection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === serverActions.CONNECTION) {
    const { socket } = action.payload;
    dispatch(clientActions.connection({ socket }));
  }
};

export default [connection];
