import React, { Fragment } from 'react';
import LoginPanel from './login/LoginPanel';
import Welcome from './login/Welcome';

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <Welcome>
          <Welcome.Title>
            Welcome to <nobr>Chat-App!</nobr>
          </Welcome.Title>
          <Welcome.Subtitle>
            <nobr>The place where you</nobr> <nobr>never need to shut up!</nobr>
          </Welcome.Subtitle>
        </Welcome>
        <LoginPanel />
      </Fragment>
    );
  }
}

export default Login;
