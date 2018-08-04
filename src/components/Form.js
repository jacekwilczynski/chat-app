import styled from 'styled-components';
import FormGroup from 'components/form/FormGroup';
import FormError from 'components/form/FormError';
import FormLabel from 'components/form/FormLabel';
import FormInput from 'components/form/FormInput';

const Form = styled.form`
  padding-top: 1em;
  padding-bottom: 1em;
`;

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.Error = FormError;

export default Form;
