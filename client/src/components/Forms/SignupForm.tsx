import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormWrapper,
  StyledButton,
  StyledFormIntro,
  StyledFieldset,
  StyledFormActions,
} from './styled';
import { FieldElement } from './FieldElement';
// import FormError from '../styles/FormError';

export const SignupForm = ({ signUp, loading, error, data }) => {
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
    const signUserIn = await signUp({ email, password });
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
          <StyledFormIntro>
            <h6>Sign Up</h6>
            <hr />
          </StyledFormIntro>
          {isSubmitting ? (
            <span>Loading....</span>
          ) : (
            <>
              <StyledFieldset disabled={loading} aria-busy={loading}>
                <FieldElement
                  title="Name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
                <FieldElement
                  title="Email"
                  name="email"
                  type="email"
                  placeholder="johnsmith@email.com"
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
                <StyledButton type="submit">Sign Up</StyledButton>
              </StyledFieldset>

              <StyledFormActions>
                <div className="new-account">
                  <span>Already have an account?</span>
                  <Link to="/signin"> Sign in</Link>
                </div>
              </StyledFormActions>
            </>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};
