import styled from 'styled-components';

import { ButtonProps } from './button';

const colorStyles = (props: ButtonProps) => {
  let bgColor = '';

  if (props.variant === 'primary') {
    bgColor = 'orange';
  }

  if (props.variant === 'secondary') {
    bgColor = 'purple';
  }

  return bgColor;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  background-color: ${colorStyles};
`;
