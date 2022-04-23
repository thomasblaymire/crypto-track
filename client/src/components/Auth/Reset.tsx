import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Form } from '@components/Form';
import styled from 'styled-components';

interface ResetProps {}

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

const formSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address..',
    componentType: 'text',
    required: true,
  },
];

export const Reset = ({}: ResetProps): JSX.Element => {
  const navigate = useNavigate();

  const { mutate } = useMutation((formData: any) => {
    console.log('TOM formData', formData);
    //localhost:8000/auth/register
    // https://crypto.dev/api/users/signup
    return fetch(`http://localhost:8000/auth/register`, {
      method: 'POST',
      body: formData,
      // body: JSON.stringify({ email, password }),
    });

    // const result = await response.json();
  });

  const onSubmit = ({ email, password }) => {
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
        schema={formSchema}
        buttonLabel="Reset Your Account"
      />
    </>
  );
};
