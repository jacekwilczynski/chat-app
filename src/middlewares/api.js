import { get } from 'axios';
import * as apiActions from 'actions/api';

const request = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === apiActions.REQUEST) {
    const { url, onSuccess, onError, ...requestOptions } = action.payload;
    get(url, requestOptions).then(
      res => {
        dispatch({
          type: onSuccess,
          payload: res,
          meta: action.meta
        });
      },
      err => {
        dispatch({
          type: onError,
          error: true,
          payload: err,
          meta: action.meta
        });
      }
    );
  }
};

export default [request];
