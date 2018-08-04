import styled from 'styled-components';

const Form = styled.form`
  padding-top: 1em;
  padding-bottom: 1em;
`;

Form.Group = styled.div`
  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

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
  max-width: 100%;
  padding: 0.5em;
  text-align: inherit;
`;

export default Form;
