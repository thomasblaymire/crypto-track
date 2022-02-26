import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const StyledAuthButtons = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`;

const StyledAuthButton = styled.div`
  margin-right: 1.5rem;
`;

export const AuthActions = () => {
  const navigate = useNavigate();
  return (
    <StyledAuthButtons>
      <StyledAuthButton>
        <Button
          onClick={() => {
            navigate('/signin');
          }}
          color="secondary"
        >
          Sign In
        </Button>
      </StyledAuthButton>

      <Button
        onClick={() => {
          navigate('/signup');
        }}
      >
        Sign Up
      </Button>
    </StyledAuthButtons>
  );
};
