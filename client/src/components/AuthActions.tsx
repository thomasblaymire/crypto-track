import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledAuthButtons = styled.div``;

export const AuthActions = () => {
  const navigate = useNavigate();
  return (
    <StyledAuthButtons>
      <button
        onClick={() => {
          navigate('/signin');
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        Sign Up
      </button>
    </StyledAuthButtons>
  );
};
