import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormError = styled.p`
  display: block;
  color: red;
  font-size: smaller;
  height: 1em;
  max-width: ${props => props.maxWidth};
`;

FormError.propTypes = {
  maxWidth: PropTypes.string
};

FormError.defaultProps = {
  maxWidth: 'auto'
};

export default FormError;
