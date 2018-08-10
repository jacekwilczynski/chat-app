export const REQUEST = '[join] REQUEST';
export const RESPONSE = '[join] RESPONSE';

export const request = nickname => ({
  type: REQUEST,
  payload: {
    nickname
  }
});

export const response = ({ accepted, nickname }) => ({
  type: RESPONSE,
  payload: { accepted, nickname }
});
