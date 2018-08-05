import { UPDATE_ERROR_STATE } from 'actions/loginView';

const initialState = {
  errors: {
    nickname: null
  }
};

const loginView = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ERROR_STATE:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

export const getErrors = state => state.errors;

export default loginView;
