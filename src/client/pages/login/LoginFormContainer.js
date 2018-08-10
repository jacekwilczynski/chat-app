import * as loginViewActions from 'client/actions/loginView';
import { getLoginViewErrors } from 'client/reducer';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

const mapStateToProps = state => ({
  errors: getLoginViewErrors(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(loginViewActions.input(event));
  },
  onSubmit: event => {
    event.preventDefault();
    dispatch(loginViewActions.submit(event));
  }
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
