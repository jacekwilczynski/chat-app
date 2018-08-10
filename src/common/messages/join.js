export const REQUEST = '[join] REQUEST';
export const ACCEPTED = '[join] ACCEPTED';
export const REJECTED = '[join] REJECTED';

export const request = nickname => ({
  type: REQUEST,
  payload: {
    nickname
  }
});

export const accepted = nickname => ({
  type: ACCEPTED,
  payload: { nickname }
});

export const rejected = reason => ({
  type: REJECTED,
  payload: reason
});
