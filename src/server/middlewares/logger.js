import { inspect } from 'util';

Object.prototype[inspect.custom] = function inspectOnlyIfPlain() {
  if (Object.getPrototypeOf(this) === Object.prototype) {
    return this;
  } else {
    return this.constructor.name;
  }
};

const subLoggers = {
  default:
    process.env.NODE_ENV === 'development' &&
    (action => 'action: ' + inspect(action, { depth: null }))
};

const logger = () => next => action => {
  const subLogger = subLoggers[action.type] || subLoggers.default;
  if (subLogger) console.log(subLogger(action));
  next(action);
};

export default [logger];
