import styled from 'styled-components';
import flow from 'lodash.flow';
import { darken, saturate, transparentize } from 'polished';

const colors = {
  success: 'seagreen',
  default: 'grey'
};

const activeColor = flow(
  saturate(0.1),
  darken(0.1)
);

const Button = styled.button`
  background-color: ${props => colors[props.theme]};
  border: none;
  border-radius: 0.3em;
  color: white;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em;
  position: relative;
  text-shadow: 0 0 5px black;

  &:hover {
    background-color: ${props => transparentize(0.2, colors[props.theme])};
  }

  &:active {
    background: ${props => activeColor(colors[props.theme])};
  }
`;

export default Button;
