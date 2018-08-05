import { combineReducers } from 'redux';
import loginView, * as fromLoginView from 'reducers/loginView';

const rootReducer = combineReducers({
  loginView
});

export const getLoginViewErrors = state =>
  fromLoginView.getErrors(state.loginView);

export default rootReducer;
