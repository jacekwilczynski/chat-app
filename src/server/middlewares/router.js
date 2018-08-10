import * as serverActions from 'server/actions/server';
import routes from 'server/routes';

const router = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === serverActions.MESSAGE) {
    const message = action.payload;
    const { socket } = action.meta;
    const route = routes[message.type];
    if (route) {
      dispatch(
        route.action(message.payload, data =>
          dispatch(serverActions.send([socket], route.response(data)))
        )
      );
    }
  }
};

export default [router];
