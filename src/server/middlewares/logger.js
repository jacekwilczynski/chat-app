import * as serverActions from 'server/actions/server';
import { inspect } from 'util';

const subLoggers = {
  default:
    process.env.NODE_ENV === 'development' &&
    (action => 'action: ' + inspect(action)),
  [serverActions.LISTENING]: action =>
    `WebSocket server listening on port ${action.meta.port}.`,
  [serverActions.CONNECTION]: action =>
    `New connection from ${action.payload.request.socket.remoteAddress}`
};

const logger = () => next => action => {
  const subLogger = subLoggers[action.type] || subLoggers.default;
  if (subLogger) console.log(subLogger(action));
  next(action);
};

export default [logger];
