import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import FormWrapper from './styled';
// import FormError from '../styles/FormError';

export const LoginForm = ({ signIn, loading, error, data }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16).required(),
  });

  const onSubmit = async ({ email, password }) => {
    console.log('TOM email pass', email, password);
    const signUserIn = await signIn({ email, password });
    if (signUserIn) {
      navigate('/profile');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, handleChange, errors, touched }) => (
        <FormWrapper>
          <fieldset disabled={loading} aria-busy={loading}>
            {/* <Error error={error} /> */}
            <label htmlFor="email">
              Email
              <Field
                type="text"
                name="email"
                placeholder="yourname@example.com"
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                // <FormError>{errors.email}</FormError>
                <div>ERROR</div>
              ) : null}
            </label>
            <label htmlFor="password">
              Password
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                // <FormError>{errors.password}</FormError>
                <div>ERROR</div>
              ) : null}
            </label>
            <button type="submit">Log In</button>
          </fieldset>

          <div className="account-actions">
            <Link to="/">
              <a>Forgot password?</a>
            </Link>

            <div className="new-account">
              Don't have an account?
              <Link to="/signup"> Sign up</Link>
            </div>
          </div>
        </FormWrapper>
      )}
    </Formik>
  );
};
