import { connect } from 'react-redux';
import { getLoginViewErrors } from 'reducer';
import { nicknameEdited } from 'actions/loginView';
import LoginForm from 'pages/login/LoginForm';

const mapStateToProps = state => ({
  errors: getLoginViewErrors(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const element = e.target;
    if (element.name === 'nickname') {
      dispatch(nicknameEdited(element.value));
    }
  },
  onSubmit: e => {
    e.preventDefault();
    console.log(`Submitting.`);
  }
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
