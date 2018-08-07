import * as apiActions from 'actions/api';
import { get } from 'axios';

const request = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === apiActions.REQUEST) {
    const { url, onSuccess, onError, ...requestOptions } = action.payload;
    get(url, requestOptions)
      .then(res => {
        dispatch({
          type: onSuccess,
          payload: res,
          meta: action.meta
        });
      })
      .catch(err => {
        if (onError) {
          dispatch({
            type: onError,
            error: true,
            payload: err,
            meta: action.meta
          });
        }
      });
  }
};

export default [request];
