export const REQUEST = '[api] REQUEST';
export const CONNECT = '[api] CONNECT';
export const CONNECTION_REJECTED = '[api] CONNECTION_REJECTED';

export const request = ({
  url,
  meta,
  onSuccess,
  onError,
  ...requestOptions
}) => ({
  type: REQUEST,
  payload: {
    url,
    onSuccess,
    onError,
    ...requestOptions
  },
  meta
});

export const connect = ({ nickname }) => ({
  type: CONNECT,
  payload: { nickname }
});

export const connectionRejected = () => ({
  type: CONNECTION_REJECTED
});
