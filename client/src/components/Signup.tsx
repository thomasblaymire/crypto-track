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
  const [error, setError] = useState(null);

  const handleSignUp = async ({ email, password }) => {
    const headers = {
      Authorzation: 'Basic ' + btoa(`${email} : ${password}`),
    };

    try {
      setLoading(true);
      console.log('TOM IN TRY', headers);

      const response = await fetch(`${process.env.AUTH_URL}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('TOM result', response);
      const result = await response.json();

      console.log('TOM result', result);
      if (response.ok) {
        setData(result);
      } else {
        setError(result);
      }
    } catch (err: any) {
      setError(err.message);
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
          error={error}
          data={data}
        />
      </FormWrapper>
    </Layout>
  );
};
