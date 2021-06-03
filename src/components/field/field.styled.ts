import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-1);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: var(--spacing-5);
  padding: var(--spacing-2);
  border: 1px solid black;
  border-radius: 6px;
`;

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})`
  height: auto;
`;
