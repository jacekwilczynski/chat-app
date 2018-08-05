export const REQUEST = '[api] REQUEST';

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
