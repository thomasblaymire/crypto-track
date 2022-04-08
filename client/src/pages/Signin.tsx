import React, { useState } from 'react';
import { Layout } from '@components/UI/Layout';
import { SigninForm } from '@components/Forms/SigninForm';
import styled from 'styled-components';
import { useAuth } from '@hooks/useAuth';

interface LoginProps {}

export const Signin = ({}: LoginProps): JSX.Element => {
  const { onLogout, onLogin, token } = useAuth();
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
      {/* <SigninForm
        signIn={handleSignIn}
        loading={loading}
        error={error}
        data={data}
      /> */}
      <button onClick={onLogin}>Signin</button>

      <p>This will eventually be sent to nav</p>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </Layout>
  );
};
