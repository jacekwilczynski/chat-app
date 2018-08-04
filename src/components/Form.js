import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding-top: 1em;
  padding-bottom: 1em;
`;

const FormGroupStyled = styled.div`
  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

Form.Group = class FormGroup extends React.Component {
  saveWidth = element => {
    if (element) {
      this.width = element.offsetWidth;
      this.saveWidth = null;
    }
  };

  render() {
    const { children } = this.props;
    return (
      <FormGroupStyled innerRef={this.saveWidth}>
        {typeof children === 'function'
          ? children({ width: this.width || 'auto' })
          : children}
      </FormGroupStyled>
    );
  }
};

Form.Label = styled.label`
  font-size: larger;
  display: block;
`;

Form.Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  display: inline-block;
  font-family: inherit;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  max-width: 100%;
  padding: 0.5em;
  text-align: inherit;
`;

Form.Error = styled.p`
  display: block;
  color: red;
  font-size: smaller;
  height: 1em;
  max-width: ${props => props.maxWidth};
`;

Form.Error.defaultProps = {
  maxWidth: 'auto'
};

export default Form;
