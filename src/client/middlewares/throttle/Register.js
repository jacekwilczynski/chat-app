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

export default Register;
