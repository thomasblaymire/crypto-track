import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Form } from '@components/Form';
import { setLocalStorage } from '@helpers/storage';
import styled from 'styled-components';

interface LoginProps {
  toggle: any;
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

export const Login = ({ toggle }: LoginProps): JSX.Element => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation((data: any) => {
    const { email, password } = data;
    return fetch('https://553e-45-67-96-230.ngrok.io/api/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const signin = await mutateAsync({
        email,
        password,
      });
      const userData = await signin.json();
      if (userData) {
        toggle();
        setLocalStorage('userId', userData.id);
        navigate('/currencies');
      }
      console.log(signin);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledHeader>
        Welcome to coin tracker, please enter your email and password below.
      </StyledHeader>
      <StyledForm
        onSubmit={onSubmit}
        schema={formSchema}
        buttonLabel="Log In"
      />
      {/* <SignupForm onSubmit={onSubmit} /> */}
    </>
  );
};
