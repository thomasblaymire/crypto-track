import React, { useState } from 'react';
import { Error } from '@components/UI/Error';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from './schemas';
import { StyledForm, StyledHeader, StyledFormError } from './styled';

export const Login = ({ toggleModal }): JSX.Element => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onSubmit = async ({ email, password }): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      if (response) {
        toggleModal();
        navigate('/currencies');
      }
    } catch (ex) {
      const error = ex as Error;
      setIsError(error);
      console.error(
        `❌ ERROR - LOGIN - ERROR: name=${error.name} message=${error.message} stack=${error.stack}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isError && (
        <StyledFormError>
          <Error errors={isError} />
        </StyledFormError>
      )}

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
