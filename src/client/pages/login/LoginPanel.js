import Center from 'client/components/Center';
import FontSize from 'client/components/FontSize';
import Panel from 'client/components/Panel';
import React from 'react';
import LoginFormContainer from './LoginFormContainer';

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
