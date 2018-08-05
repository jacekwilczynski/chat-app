import { connect } from 'react-redux';
import { getLoginViewErrors } from 'reducer';
import { inputNickname } from 'actions/loginView';
import LoginForm from 'pages/login/LoginForm';

const mapStateToProps = state => ({
  errors: getLoginViewErrors(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const element = e.target;
    if (element.name === 'nickname') {
      dispatch(inputNickname(element.value));
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
