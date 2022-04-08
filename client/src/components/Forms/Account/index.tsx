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
} from '../styled';
import { FieldElement } from '../FieldElement';
// import FormError from '../styles/FormError';
import styled from 'styled-components';

const StyledAccountForm = styled.form`
  fieldset {
    border: none;
    padding: 0;
  }
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  input {
    width: 364px;
    background-color: rgb(23, 25, 36);
    border: 1px solid rgb(64, 66, 78);
    border-radius: 8px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    max-width: 100%;
    outline: 0px;
    padding: 0px 16px;
    font-size: 14px;
    height: 48px;
    line-height: 21px;

    &:focus {
      border-color: rgb(56, 97, 251);
      box-shadow: rgb(56 97 251 / 30%) 0px 0px 0px 4px;
    }

    :hover:not(:disabled):not(:focus) {
      border-color: rgb(56, 97, 251);
    }
  }

  label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

const StyledResetButton = styled.button`
  align-items: center;
  background: rgb(56, 97, 251);
  border: 0px;
  border-radius: 8px;
  display: inline-flex;
  color: rgb(255, 255, 255);
  cursor: pointer;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  width: auto;
  height: 40px;
  font-size: 14px;
  padding: 0px 24px;
  line-height: 24px;
  margin-top: 18px;
`;

export const AccountForm = ({}) => {
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
    // console.log('TOM email pass', email, password);
    // const authenticated = await signIn({ email, password });
    // if (authenticated) {
    //   navigate('/profile');
    // }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, handleChange, errors, touched }) => (
          <StyledAccountForm>
            <fieldset>
              <FormElement>
                <label for="name">Name</label>
                <input
                  autoComplete="off"
                  title="Email"
                  name="email"
                  type="text"
                  placeholder="yourname@example.com"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
              </FormElement>

              <FormElement>
                <label for="username">Username</label>
                <input
                  title="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
              </FormElement>

              <FormElement>
                <label for="email">Email Address</label>
                <input
                  title="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
              </FormElement>

              <StyledResetButton type="submit">Sign In</StyledResetButton>
            </fieldset>
          </StyledAccountForm>
        )}
      </Formik>
    </div>
  );
};
