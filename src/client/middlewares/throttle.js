import Register from './throttle/Register';

const actions = Register();

const throttle = () => next => action => {
  const timeout = action.meta && action.meta.throttle;

  if (!timeout) {
    next(action);
    return;
  }

  const { type } = action;

  if (actions.isThrottled(type)) {
    actions.tryLater(type, () => {
      next(action);
    });
    return;
  }

  actions.throttle(type);
  next(action);
  setTimeout(() => {
    actions.dethrottle(type);
  }, timeout);
};

export default [throttle];
