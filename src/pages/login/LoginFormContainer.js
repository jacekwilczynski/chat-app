import React from 'react';
import LoginForm from 'pages/login/LoginForm';

class LoginFormContainer extends React.Component {
  state = {
    errors: {
      nickname: null
    }
  };

  handleChange = async e => {
    const nickname = e.target.value;
    const res = await fetch('/api/check_nickname/' + nickname);
    const nicknameAvailable = (await res.text()) === 'true';
    this.setState({
      errors: {
        nickname: nicknameAvailable
          ? null
          : `Nickname '${nickname}' is currently used by someone else.`
      }
    });
  };

  render() {
    return (
      <LoginForm
        errors={this.state.errors}
        onSubmit={() => {}}
        onChange={this.handleChange}
      />
    );
  }
}

export default LoginFormContainer;
