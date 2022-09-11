import React, { useState } from 'react';
import { Error } from '@components/UI/Error';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from './schemas';
import { AuthenticationOptions } from '../../types';
import { StyledForm, StyledHeader, StyledFormError } from './styled';

export const Login = ({ toggleModal }): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = ({ email, password }: AuthenticationOptions) => {
    try {
      setIsLoading(true);
      const response = login({ email, password });
      if (response) {
        toggleModal();
        navigate('/currencies');
      }
    } catch (ex) {
      const error = ex as Error;
      setError(error.message);
      console.error(
        `❌ ERROR - LOGIN - ERROR: name=${error.name} message=${error.message} stack=${error.stack}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error ? (
        <StyledFormError>
          <Error error={error} />
        </StyledFormError>
      ) : null}

      <StyledHeader>
        Welcome to coin tracker, please enter your email and password below.
      </StyledHeader>

      <StyledForm
        onSubmit={onSubmit}
        schema={loginSchema}
        isLoading={isLoading}
        buttonLabel="Log In"
      />
    </>
  );
};
