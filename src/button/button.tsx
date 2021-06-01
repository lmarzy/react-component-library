import React, { ButtonHTMLAttributes, FC } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  isFullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size,
  isFullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary']),
  size: PropTypes.oneOf(['small', 'large']),
  isFullWidth: PropTypes.bool,
};
