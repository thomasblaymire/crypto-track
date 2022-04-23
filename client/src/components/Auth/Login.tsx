import React, { useState } from 'react';
import { Form } from '@components/Form';
import { Error } from '@components/UI/Error';
import { useAuth } from '@helpers/auth';
import styled from 'styled-components';

interface LoginProps {
  toggleModal: () => void;
}

const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

const StyledHeader = styled.div`
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 24px;
  line-height: 24px;
  color: #a1a7bb;
`;

const StyledFormError = styled.div`
  margin: 2rem 2rem 0rem 2rem;
`;

const formSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address..',
    componentType: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter a secure password',
    componentType: 'text',
    required: true,
  },
];

export const Login = ({ toggleModal }: LoginProps): JSX.Element => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      response && toggleModal();
    } catch (err: any) {
      console.log('TOM error', err);
      setIsError(err);
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
        schema={formSchema}
        isLoading={isLoading}
        buttonLabel="Log In"
      />
    </>
  );
};
