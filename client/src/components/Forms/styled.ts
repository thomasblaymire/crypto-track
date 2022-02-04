import styled from 'styled-components';
import { Form } from 'formik';
// import Button from '../UI/Button';

export const FormWrapper = styled(Form)`
  width: 30%;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  background-color: rgba(226, 232, 240);
  border-radius: 5px;
`;

export const StyledFormIntro = styled.div`
  text-align: center;
  padding: 2.5rem;
  hr {
    border-color: rgba(203, 213, 225);
    margin-top: 3rem;
    border-top-width: 0px;
    margin-bottom: 0rem;
  }

  h6 {
    margin: 0;
    font-size: 1.5rem;
    color: rgba(100, 116, 139);
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 0;
  padding: 0rem 2.5rem;

  &[disabled] {
    opacity: 0.5;
  }
  &[aria-busy='true']::before {
    background-size: 50% auto;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: #1c293c;
  text-transform: uppercase;
  border-radius: 5px;
  color: rgba(255, 255, 255);
  border: 0;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 3rem;
  padding: 1rem 0rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #101926;
  }
`;

export const StyledFormActions = styled.div`
  padding: 3.5rem 2.5rem 2.5rem 2.5rem;
  color: rgba(100, 116, 139);
  a {
    text-decoration: none;
    color: #1a1a25;
  }
`;
