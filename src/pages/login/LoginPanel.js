import React from 'react';
import Center from 'components/Center';
import Panel from 'components/Panel';
import FontSize from 'components/FontSize';
import LoginFormContainer from 'pages/login/LoginFormContainer';

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
