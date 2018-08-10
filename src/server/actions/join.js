export const REQUESTED = '[join] REQUESTED';
export const ACCEPT = '[join] ACCEPT';
export const REJECT = '[join] REJECT';

export const requested = nickname => ({
  type: REQUESTED,
  payload: {
    nickname
  }
});

export const accept = nickname => ({
  type: ACCEPT,
  payload: { nickname }
});

export const reject = reason => ({
  type: REJECT,
  payload: reason
});
