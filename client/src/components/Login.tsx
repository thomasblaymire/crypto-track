import React, { useState } from 'react';
import { Layout } from './Layout';
import { LoginForm } from './Forms/LoginForm';

interface LoginProps {}

export const Login = ({}: LoginProps): JSX.Element => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = async ({ email, password }) => {
    const headers = {
      Authorzation: 'Basic ' + btoa(`${email} : ${password}`),
    };

    console.log('TOM handleSignIn parent');

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
      <LoginForm
        signIn={handleSignIn}
        loading={loading}
        error={error}
        data={data}
      />
    </Layout>
  );
};
