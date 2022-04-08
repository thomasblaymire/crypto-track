import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../UI/Error';
import { useFormik } from 'formik';

import {
  FormWrapper,
  FormContent,
  StyledButton,
  StyledFormIntro,
  StyledFieldset,
  StyledFormActions,
  StyledFormError,
} from './styled';
import { FieldElement } from './FieldElement';
// import FormError from '../styles/FormError';

export const SignupForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16).required(),
  });

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors: formErrors, touched }) => (
          <FormContent>
            <StyledFormIntro>
              <h6>Sign Up</h6>
              <hr />
            </StyledFormIntro>
            <>
              <StyledFieldset>
                {/* <StyledFieldset disabled={loading} aria-busy={loading}> */}
                <FieldElement
                  id="name"
                  title="Name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  handleChange={handleChange}
                  errors={formErrors}
                  touched={touched}
                />
                <FieldElement
                  id="email"
                  title="Email"
                  name="email"
                  type="email"
                  placeholder="johnsmith@email.com"
                  handleChange={handleChange}
                  errors={formErrors}
                  touched={touched}
                />
                <FieldElement
                  id="password"
                  title="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  errors={formErrors}
                  touched={touched}
                />
                {/* <StyledButton type="submit">Sign Up</StyledButton> */}
                <button type="submit">Submit</button>
              </StyledFieldset>

              {/* {errors && (
                <StyledFormError>
                  <Error errors={errors} />
                </StyledFormError>
              )} */}

              <StyledFormActions>
                <div className="new-account">
                  <span>Already have an account?</span>
                  <Link to="/signin"> Sign in</Link>
                </div>
              </StyledFormActions>
            </>
          </FormContent>
        )}
      </Formik>
    </FormWrapper>
  );
};
