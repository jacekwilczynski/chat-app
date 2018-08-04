import styled from 'styled-components';

const Panel = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border-radius: 1em;
  max-width: 95%;
  overflow: hidden;
`;

Panel.Header = styled.div`
  background: linear-gradient(
    rgba(225, 225, 225, 0.7),
    rgba(200, 200, 200, 0.7)
  );
  padding: 1em;
`;

Panel.Body = styled.div`
  background: linear-gradient(
    rgba(247, 247, 247, 0.8),
    rgba(221, 221, 238, 0.8)
  );
  padding: 1em 1em;

  @media (min-width: 25em) {
    padding: 1em 3em;
  }
`;

export default Panel;
