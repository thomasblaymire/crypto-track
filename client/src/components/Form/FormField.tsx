import React from 'react';
import { StyledField, StyledLabel, StyledFieldError } from './styled';

export const FormField = ({
  id,
  label,
  children,
  required,
  formProps: { touched, errors },
}): JSX.Element => {
  const hasError: boolean = errors[id] && touched[id];
  return (
    <StyledField id={id} label={label} required={required} hasError={hasError}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {children}
      {hasError && <StyledFieldError>{errors[id]}</StyledFieldError>}
    </StyledField>
  );
};
