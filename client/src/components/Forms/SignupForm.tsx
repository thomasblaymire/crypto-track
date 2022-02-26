import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../Error';
import { Button } from '../Button';

import {
  FormWrapper,
  StyledButton,
  StyledFormIntro,
  StyledFieldset,
  StyledFormActions,
  StyledFormError,
} from './styled';
import { FieldElement } from './FieldElement';
// import FormError from '../styles/FormError';

export const SignupForm = ({ signUp, loading, errors, data }) => {
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
      {({ handleChange, errors: formErrors, touched }) => (
        <FormWrapper>
          <StyledFormIntro>
            <h6>Sign Up</h6>
            <hr />
          </StyledFormIntro>
          <>
            <StyledFieldset disabled={loading} aria-busy={loading}>
              <FieldElement
                title="Name"
                name="name"
                type="text"
                placeholder="John Smith"
                handleChange={handleChange}
                errors={formErrors}
                touched={touched}
              />
              <FieldElement
                title="Email"
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
                handleChange={handleChange}
                errors={formErrors}
                touched={touched}
              />
              <FieldElement
                title="Password"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                errors={formErrors}
                touched={touched}
              />
              {/* <StyledButton type="submit" loading={loading}>
                Sign Up
              </StyledButton> */}
              <Button loading={true}>Sign Up</Button>
            </StyledFieldset>

            {errors && (
              <StyledFormError>
                <Error errors={errors} />
              </StyledFormError>
            )}

            <StyledFormActions>
              <div className="new-account">
                <span>Already have an account?</span>
                <Link to="/signin"> Sign in</Link>
              </div>
            </StyledFormActions>
          </>
        </FormWrapper>
      )}
    </Formik>
  );
};
