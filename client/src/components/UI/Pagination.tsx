import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const StyledPagination = styled.div`
  margin-top: 6rem;
  padding-bottom: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledPrimaryButton = styled(Button)`
  margin-right: 1rem;
`;

export const Pagination = ({ handlePaginate }): JSX.Element => (
  <StyledPagination>
    <StyledPrimaryButton
      onClick={() => handlePaginate(page => page - 1)}
      color="primary"
    >
      Previous
    </StyledPrimaryButton>
    <Button onClick={() => handlePaginate(page => page + 1)} color="primary">
      Next
    </Button>
  </StyledPagination>
);
