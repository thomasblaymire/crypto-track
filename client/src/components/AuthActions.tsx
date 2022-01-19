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
          navigate('/login');
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          navigate('/register');
        }}
      >
        Sign Up
      </button>
    </StyledAuthButtons>
  );
};
