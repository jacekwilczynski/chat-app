import * as socketActions from 'server/actions/socket';
import routes from 'server/routes';

const router = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === socketActions.MESSAGE) {
    const { clientId, message } = action.payload;
    const route = routes[message.type];
    if (route) {
      dispatch(
        route.action(message.payload, data =>
          dispatch(socketActions.send([clientId], route.response(data)))
        )
      );
    }
  }
};

export default [router];
