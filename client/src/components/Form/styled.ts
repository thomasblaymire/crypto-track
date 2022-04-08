import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../UI/Button';
import { device } from '@helpers/device';

interface FieldProps {
  hasError?: boolean;
}

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  @media ${device.mobileL} {
    padding-top: 15rem;
  }
`;

export const FormContent = styled(Form)`
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  background-color: rgba(226, 232, 240);
  border-radius: 5px;

  @media ${device.mobileL} {
    width: 30%;
  }
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

export const StyledFormActions = styled.div`
  padding: 3.5rem 2.5rem 2.5rem 2.5rem;
  color: rgba(100, 116, 139);
  a {
    text-decoration: none;
    color: #1a1a25;
  }
`;

export const StyledFormError = styled.div`
  margin: 2rem 2rem 0rem 2rem;
`;

export const StyledLabel = styled.label`
  color: #fff;
  font-size: 1.3rem;
  display: block;
  text-align: left;
`;

export const StyledField = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  // KLUDGE Update this into one rule
  input {
    border: 1px solid
      ${({ hasError }) => (hasError ? `rgb(234, 57, 67)` : `rgb(64, 66, 78)`)};
    background-color: ${({ hasError }) =>
      hasError ? `rgb(255, 23, 73, 0.04)` : `rgb(23, 25, 36)`};
    background-color: rgb(23, 25, 36);
    border-radius: 8px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    max-width: 100%;
    outline: 0px;
    padding: 0px 16px;
    font-size: 14px;
    height: 48px;
    line-height: 21px;

    :placeholder {
      color: red;
    }

    &:focus,
    &:active,
    &:hover {
      border-color: rgb(56, 97, 251);
    }
  }
`;

export const StyledFieldError = styled.small`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: rgb(255, 23, 73);
  margin: 8px 0px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background: rgb(56, 97, 251);
  border-radius: 5px;
  color: rgba(255, 255, 255);
  border: 0;
  font-size: 1.4rem;
  margin-top: 3rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  height: 48px;
  padding: 0px 24px;
  line-height: 24px;

  &:disabled {
    background: #1c293c;
    &:hover {
      background: #1c293c;
    }
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.08)
      ),
      rgb(56, 97, 251);
  }
`;
