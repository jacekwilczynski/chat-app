import { connect } from 'react-redux';
import { getLoginViewErrors } from 'reducer';
import * as loginViewActions from 'actions/loginView';
import LoginForm from 'pages/login/LoginForm';

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
