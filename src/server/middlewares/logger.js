import 'colors';
import { inspect } from 'util';

Object.prototype[inspect.custom] = function inspectOnlyIfPlain() {
  if (Object.getPrototypeOf(this) === Object.prototype) {
    return this;
  } else {
    return this.constructor.name.gray;
  }
};

const subLoggers = {
  default:
    process.env.NODE_ENV === 'development' &&
    (action => {
      const actionCopy = Object.assign({}, action);
      delete actionCopy.type;
      return (
        `${action.type}:\n`.blue.bold +
        inspect(actionCopy, {
          breakLength: 1,
          colors: true,
          compact: false,
          depth: null
        }).replace(/[{}]/g, ' ')
      );
    })
};

const logger = () => next => action => {
  const subLogger = subLoggers[action.type] || subLoggers.default;
  if (subLogger) console.log(subLogger(action) + '\n');
  next(action);
};

export default [logger];
