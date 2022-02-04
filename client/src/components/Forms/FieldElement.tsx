import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: rgba(71, 85, 105);
  text-transform: uppercase;
  font-size: 1.4rem;
  display: block;
  margin-bottom: 2rem;
  text-align: left;
`;

const StyledField = styled.div`
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 2.25rem;
    font-size: 1.4rem;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    &:focus {
      outline: 0;
      border-color: #2196f3;
    }
    &::placeholder {
      color: #dbd9d9;
      font-size: 1.4rem;
    }
  }
`;

export const FieldElement = ({
  name,
  title,
  type,
  placeholder,
  handleChange,
  errors,
  touched,
}) => {
  return (
    <StyledLabel htmlFor={name}>
      {title}
      <StyledField>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </StyledField>
      {errors.email && touched.email ? (
        // <FormError>{errors.email}</FormError>
        <div>ERROR</div>
      ) : null}
      {errors.password && touched.password ? (
        // <FormError>{errors.password}</FormError>
        <div>ERROR</div>
      ) : null}
    </StyledLabel>
  );
};
