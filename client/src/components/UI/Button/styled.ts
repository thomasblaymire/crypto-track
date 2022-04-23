import styled, { css } from 'styled-components';

export type ButtonProps = {
  onClick?: any;
  children?: any;
  color?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset';
  isLoading?: boolean;
  className?: string;
};

const COLOR = {
  primary: css`
    color: rgb(255, 255, 255);
    background: rgb(56, 97, 251);
    border: 1px solid rgb(56, 97, 251);
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.08)
        ),
        rgb(56, 97, 251);
      color: rgb(255, 255, 255);
    }
  `,
  secondary: css`
    color: #fff;
    background: transparent;
    border: 1px solid rgb(50, 53, 70);
    &:hover {
      background: rgb(23, 25, 36);
      color: rgb(255, 255, 255);
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  border: 0px;
  border-radius: 8px;
  display: inline-flex;
  cursor: pointer;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  width: auto;
  height: 32px;
  font-size: 12px;
  padding: 0px 16px;
  line-height: 18px;
  font-family: 'Poppins', sans-serif;

  ${props => props.color && COLOR[props.color]}
  ${props => props.disabled && DISABLED}
`;

export const StyledLoader = styled.div`
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: load 1s infinite linear;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;
