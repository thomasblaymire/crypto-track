import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { resetSchema } from './schemas';
import { AuthenticationOptions } from '../../types';
import { StyledHeader, StyledForm } from './styled';

export const Reset = ({ toggleModal }): JSX.Element => {
  const navigate = useNavigate();

  const { mutate } = useMutation((formData: any) => {
    console.log('TOM formData', formData);
    return fetch(`http://localhost:8000/auth/register`, {
      method: 'POST',
      body: formData,
    });
  });

  const onSubmit = ({ email, password }: AuthenticationOptions) => {
    console.log('TOM onSubmit', email, password);
    event.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: ({ data }: any) => {
          console.log('TOM data', data);
          navigate('/profile');
        },
        onError: (error, variables, context) => {
          console.log(
            `rolling back optimistic update with id`,
            error,
            variables,
            context
          );
        },
      }
    );
  };

  return (
    <>
      <StyledHeader>Reset your user account.</StyledHeader>
      <StyledForm
        onSubmit={onSubmit}
        schema={resetSchema}
        buttonLabel="Reset Your Account"
      />
    </>
  );
};
