import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledForm, StyledHeader, StyledFormError } from './styled';
import { signupSchema } from './schemas';
import { useAuth } from '@helpers/auth';
import { Error } from '@components/UI/Error';

export const Signup = ({ toggleModal }): JSX.Element => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onSubmit = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      const response = await register({ name, email, password });
      if (response) {
        toggleModal();
        navigate('/currencies');
      }
    } catch (ex) {
      const error = ex as Error;
      setIsError(error);
      console.error(
        `❌ ERROR - SIGNUP - ERROR: name=${error.name} message=${error.message} stack=${error.stack}`
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
        Gain access to additional features such as Watchlist and Portfolio
        tracking.
      </StyledHeader>
      <StyledForm
        onSubmit={onSubmit}
        schema={signupSchema}
        isLoading={isLoading}
        buttonLabel="Create an account"
      />
    </>
  );
};
