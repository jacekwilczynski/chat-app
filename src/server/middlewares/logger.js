import 'colors';
import { inspect } from 'util';

const isSerializable = obj =>
  [Object.prototype, Array.prototype].includes(Object.getPrototypeOf(obj));

Object.prototype[inspect.custom] = function() {
  if (isSerializable(this)) {
    return this;
  } else {
    return this.constructor.name.gray;
  }
};

const makeString = action => {
  const actionCopy = Object.assign({}, action);
  delete actionCopy.type;
  return (
    `${action.type}:\n`.blue.bold +
    inspect(actionCopy, {
      breakLength: 1,
      colors: true,
      compact: false,
      depth: null
    })
      .replace(/[{}]/g, ' ')
      .replace(/(\n\s*)(\[)(\s)/g, (_, p1, p2, p3) => `${p1}${p2.gray}${p3}`)
      .replace(/(\s)(])(,?\s)/g, (_, p1, p2, p3) => `${p1}${p2.gray}${p3}`)
  );
};

const logger = () => next => action => {
  console.log(makeString(action));
  next(action);
};

export default [logger];
