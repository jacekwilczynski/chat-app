import Button from 'client/components/Button';
import Form from 'client/components/Form';
import TextAlign from 'client/components/TextAlign';
import PropTypes from 'prop-types';
import React from 'react';

const hasAny = map => Object.keys(map).filter(key => map[key]).length > 0;

class LoginForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.shape({ nickname: PropTypes.string })
  };

  static defaultProps = {
    onChange: () => {},
    errors: { nickname: null }
  };

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { onChange, onSubmit, errors } = this.props;
    return (
      <Form onSubmit={onSubmit}>
        <Form.Group>
          {({ width }) => (
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
                error={errors.nickname}
              />
              <Form.Error maxWidth={width + 'px' || 'auto'}>
                {errors.nickname}
              </Form.Error>
            </TextAlign.Center>
          )}
        </Form.Group>
        <Form.Group>
          <TextAlign.Right>
            <Button kind="success" disabled={hasAny(errors)}>
              Join
            </Button>
          </TextAlign.Right>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginForm;
