import loginView, * as fromLoginView from 'reducers/loginView';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  loginView
});

export const getLoginViewErrors = state =>
  fromLoginView.getErrors(state.loginView);

export default rootReducer;
