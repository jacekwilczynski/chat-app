import React from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';
import TextAlign from 'components/TextAlign';
import Button from 'components/Button';

class LoginForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    onChange: () => {}
  };

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { onChange, onSubmit } = this.props;
    return (
      <Form
        ref={element => {
          this.form = element;
        }}
        onSubmit={onSubmit}
      >
        <Form.Group>
          <TextAlign.Center>
            <Form.Label htmlFor="nickname">Enter your nickname:</Form.Label>
            <Form.Input
              type="text"
              id="nickname"
              name="nickname"
              innerRef={element => {
                this.input = element;
              }}
              onChange={onChange}
            />
          </TextAlign.Center>
        </Form.Group>
        <Form.Group>
          <TextAlign.Right>
            <Button theme="success">Join</Button>
          </TextAlign.Right>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginForm;
