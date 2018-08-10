export const REQUESTED = '[join] REQUESTED';

export const requested = ({ nickname }, next) => ({
  type: REQUESTED,
  payload: { nickname },
  meta: { next }
});
