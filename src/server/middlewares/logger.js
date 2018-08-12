import makeString from './logger/makeString';

const logger = () => next => action => {
  console.log(makeString(action));
  next(action);
};

export default [logger];
