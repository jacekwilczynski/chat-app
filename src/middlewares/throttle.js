const Register = () => {
  const state = {};
  return {
    isThrottled: actionType =>
      state[actionType] && state[actionType].isThrottled,
    throttle: actionType => {
      state[actionType] = { isThrottled: true };
    },
    tryLater: (actionType, callback) => {
      state[actionType].onDethrottle = callback;
    },
    dethrottle: actionType => {
      const retry = state[actionType].onDethrottle;
      state[actionType] = null;
      if (retry) retry();
    }
  };
};

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
