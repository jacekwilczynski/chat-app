import React from 'react';
import styled from 'styled-components';

const FormGroupStyled = styled.div`
  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

class FormGroup extends React.Component {
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
}

export default FormGroup;
