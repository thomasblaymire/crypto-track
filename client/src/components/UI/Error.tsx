import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1.4rem;

  li {
    font-size: 1.2rem;
    line-height: 20px;
  }
`;

export const Error = ({ error }): JSX.Element => {
  return (
    <StyledError>
      <strong>Oops Something Went Wrong..</strong>
      {error ? <li>{error}</li> : null}
    </StyledError>
  );
};
