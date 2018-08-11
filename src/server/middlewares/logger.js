import * as joinActions from 'server/actions/join';
import * as nicknameActions from 'server/actions/nickname';
import * as serverActions from 'server/actions/server';
import { inspect } from 'util';

const subLoggers = {
  default:
    process.env.NODE_ENV === 'development' &&
    (action => 'action: ' + inspect(action)),
  [serverActions.LISTENING]: action =>
    `WebSocket server listening on port ${action.meta.port}.`,
  [serverActions.CONNECTION]: action =>
    `New connection from ${action.payload.request.socket.remoteAddress}`,
  [serverActions.MESSAGE]: action =>
    `Received message: ${inspect(action.payload)}`,
  [serverActions.SEND]: action =>
    `Sending message: ${inspect(action.payload.message)}`,
  [nicknameActions.CHECK_AVAILABILITY]: action =>
    `Checking whether the nickname "${action.payload}" is available.`,
  [joinActions.REQUESTED]: action =>
    `Considering a new join request from "${action.payload.nickname}".`
};

const logger = () => next => action => {
  const subLogger = subLoggers[action.type] || subLoggers.default;
  if (subLogger) console.log(subLogger(action));
  next(action);
};

export default [logger];
