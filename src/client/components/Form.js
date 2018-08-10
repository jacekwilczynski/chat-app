import styled from 'styled-components';
import FormError from './form/FormError';
import FormGroup from './form/FormGroup';
import FormInput from './form/FormInput';
import FormLabel from './form/FormLabel';

const Form = styled.form`
  padding-top: 1em;
  padding-bottom: 1em;
`;

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.Error = FormError;

export default Form;
