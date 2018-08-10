import Center from 'components/Center';
import FontSize from 'components/FontSize';
import Panel from 'components/Panel';
import LoginFormContainer from 'pages/login/LoginFormContainer';
import React from 'react';

const LoginPanel = () => (
  <Center>
    <Panel>
      <Panel.Header>
        <h2>Sign in</h2>
      </Panel.Header>
      <Panel.Body>
        <FontSize.Larger>
          <LoginFormContainer />
        </FontSize.Larger>
      </Panel.Body>
    </Panel>
  </Center>
);

export default LoginPanel;
