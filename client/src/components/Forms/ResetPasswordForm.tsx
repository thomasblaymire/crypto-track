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

export const ResetPasswordForm = ({ resetPassword, loading, error, data }) => {
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
    const authenticated = await resetPassword({ email, password });
    if (authenticated) {
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
            <h6>Reset Password</h6>
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
            <StyledButton type="submit">Reset Password</StyledButton>
          </StyledFieldset>
          <StyledFormActions>
            <div className="new-account">
              <span>Already have an account?</span>
              <Link to="/signin"> Sign in</Link>
            </div>
          </StyledFormActions>
        </FormWrapper>
      )}
    </Formik>
  );
};
