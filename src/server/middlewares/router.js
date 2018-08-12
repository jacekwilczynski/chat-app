import * as clientActions from 'server/actions/client';
import routes from 'server/routes';

const router = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === clientActions.MESSAGE) {
    const { clientId, message } = action.payload;
    const route = routes[message.type];
    if (route) {
      dispatch(
        route.action(message.payload, data =>
          dispatch(clientActions.send([clientId], route.response(data)))
        )
      );
    }
  }
};

export default [router];
