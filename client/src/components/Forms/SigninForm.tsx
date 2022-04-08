import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormWrapper,
  FormContent,
  StyledButton,
  StyledFormIntro,
  StyledFieldset,
  StyledFormActions,
} from './styled';
import { FieldElement } from './FieldElement';
// import FormError from '../styles/FormError';

export const SigninForm = ({ signIn, loading, error, data }) => {
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
    const authenticated = await signIn({ email, password });
    if (authenticated) {
      navigate('/profile');
    }
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, handleChange, errors, touched }) => (
          <FormContent>
            <StyledFormIntro>
              <h6>Sign In</h6>
              <hr />
            </StyledFormIntro>
            <StyledFieldset disabled={loading} aria-busy={loading}>
              <FieldElement
                title="Email"
                name="email"
                type="text"
                placeholder="yourname@example.com"
                handleChange={handleChange}
                errors={errors}
                touched={touched}
              />
              <FieldElement
                title="Password"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                errors={errors}
                touched={touched}
              />
              <StyledButton type="submit">Sign In</StyledButton>
            </StyledFieldset>

            <StyledFormActions>
              <Link to="/reset">
                <a>Forgot password?</a>
              </Link>

              <div className="new-account">
                <span>Don't have an account?</span>
                <Link to="/signup"> Sign up</Link>
              </div>
            </StyledFormActions>
          </FormContent>
        )}
      </Formik>
    </FormWrapper>
  );
};
