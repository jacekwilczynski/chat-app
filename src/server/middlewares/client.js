import * as clientActions from 'server/actions/client';

const sockets = new Map();

const register = () => next => action => {
  next(action);
  if (action.type === clientActions.REGISTER) {
    const { id, socket } = action.payload;
    sockets.set(id, socket);
  }
};

export default [register];
