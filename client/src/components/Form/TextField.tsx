import React from 'react';
import { FormField } from './FormField';

export const TextField = ({
  label,
  field: { name, type, value, placeholder, ...fieldProps },
  form,
  required,
  ...props
}) => (
  <FormField id={name} label={label} required={required} formProps={form}>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      {...fieldProps}
      {...props}
    />
  </FormField>
);
