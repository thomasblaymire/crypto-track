import React from 'react';
import styled, { css } from 'styled-components';
import { Loading } from './Loading';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  outline: none;
  transition: all 0.2s;
  width: 85px;
  height: 35px;
  font-family: 'Poppins', sans-serif;

  ${props => props.color && COLOR[props.color]}
  ${props => props.disabled && DISABLED}
`;

const StyledButtonLoading = styled.div``;

const COLOR = {
  primary: css`
    color: #fff;
    background: #1162a2;
    &:hover {
      background: #073253;
    }
  `,
  secondary: css`
    color: #fff;
    background: transparent;
    border: solid 2px white;
    &:hover {
      background: #fff;
      color: #000;
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {children}
      {loading && (
        <StyledButtonLoading>
          <Loading position="" width="15" height="15" />
        </StyledButtonLoading>
      )}
    </StyledButton>
  );
};
