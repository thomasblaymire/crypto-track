import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { StyledForm, StyledHeader } from './styled';
import { setLocalStorage } from '@helpers/storage';

interface LoginProps {
  toggle: any;
}

const formSchema = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    componentType: 'text',
    placeholder: 'Name:',
    required: true,
  },
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

export const Signup = ({ toggle }: LoginProps): JSX.Element => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation((data: any) => {
    const { email, password } = data;
    return fetch('https://553e-45-67-96-230.ngrok.io/api/users/signup', {
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
        Gain access to additional features such as Watchlist and Portfolio
        tracking.
      </StyledHeader>
      <StyledForm
        onSubmit={onSubmit}
        schema={formSchema}
        isLoading={isLoading}
        buttonLabel="Create an account"
      />
    </>
  );
};
