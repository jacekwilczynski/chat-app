import flow from 'lodash.flow';
import { darken, desaturate, saturate, transparentize } from 'polished';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const colors = {
  success: 'seagreen',
  default: 'grey'
};

const activeColor = flow(
  saturate(0.1),
  darken(0.1)
);

const Button = styled.button`
  background-color: ${props => colors[props.kind]};
  border: none;
  border-radius: 0.3em;
  color: white;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em;
  position: relative;
  text-shadow: 0 0 5px black;

  ${props =>
    props.disabled
    ? css`
    background-color: ${desaturate(1, colors[props.kind])};
    cursor: not-allowed;
    `
    : css`
    &:hover {
      background-color: ${transparentize(0.2, colors[props.kind])};
    }
    `
  }

  &:active {
    background-color: ${props => activeColor(colors[props.kind])};
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['success', 'default'])
};

Button.defaultProps = {
  kind: 'default'
};

export default Button;
