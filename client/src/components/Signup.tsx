import React, { useState } from 'react';
import { Layout } from './Layout';
import { SignupForm } from './Forms/SignupForm';
import styled from 'styled-components';

interface LoginProps {}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`;

export const Signup = ({}: LoginProps): JSX.Element => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleSignUp = async ({ email, password }) => {
    try {
      setLoading(true);
      console.log('TOM email passworffl', {
        email,
        password,
      });

      const response = await fetch(`https://crypto.dev/api/users/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.errors) {
        setErrors(result.errors);
      } else {
        setData(result);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <FormWrapper>
        <SignupForm
          signUp={handleSignUp}
          loading={loading}
          errors={errors}
          data={data}
        />
      </FormWrapper>
    </Layout>
  );
};
