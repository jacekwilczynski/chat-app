import React, { Fragment } from 'react';
import Welcome from 'pages/login/Welcome';
import Center from 'components/Center';
import Panel from 'components/Panel';
import FontSize from 'components/FontSize';
import Form from 'components/Form';
import TextAlign from 'components/TextAlign';
import Button from 'components/Button';

class Login extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

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
        <Center>
          <Panel>
            <Panel.Header>
              <h2>Sign in</h2>
            </Panel.Header>
            <Panel.Body>
              <FontSize.Larger>
                <Form>
                  <Form.Group>
                    <TextAlign.Center>
                      <Form.Label htmlFor="nickname">
                        Enter your nickname:
                      </Form.Label>
                      <Form.Input
                        type="text"
                        id="nickName"
                        name="nickname"
                        innerRef={element => {
                          this.input = element;
                        }}
                      />
                    </TextAlign.Center>
                  </Form.Group>
                  <Form.Group>
                    <TextAlign.Right>
                      <Button theme="success" onClick={alert}>Sign in</Button>
                    </TextAlign.Right>
                  </Form.Group>
                </Form>
              </FontSize.Larger>
            </Panel.Body>
          </Panel>
        </Center>
      </Fragment>
    );
  }
}

export default Login;
