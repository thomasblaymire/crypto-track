import styled from 'styled-components';
import { Form } from 'formik';
// import Button from '../UI/Button';

const FormWrapper = styled(Form)`
  width: 50%;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  padding: 5rem 0 0 0;
  label {
    color: #fff;
    display: block;
    margin-bottom: 2rem;
    text-align: left;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    border: 2px solid #eff3f5;
    border-radius: 5px;
    margin-top: 10px;
    &:focus {
      outline: 0;
      border-color: #2196f3;
    }
    &::placeholder {
      color: #b1b1b1;
      font-size: 1.4rem;
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: #01c875;
    border-radius: 5px;
    color: white;
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
      opacity: 0.8;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
    }
  }
  .form-title {
    padding-bottom: 1.5rem;
    font-size: 1.4rem;
    color: #1d2c4c;
    font-weight: bold;
  }
  .delete {
    background: #fb4242;
    border-radius: 5px;
    color: white;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  .account-actions {
    padding-top: 3rem;
    a {
      color: #01c875;
    }
  }
`;

export const StyledSubscrbibeForm = styled.div`
  padding-top: 1rem;
`;
export const StyledSubscribeGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.9rem;
    border: 2px solid #eff3f5;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: center;
    @media (min-width: 480px) {
      width: 300px;
      margin-bottom: 0;
      text-align: left;
    }
    &:focus {
      outline: 0;
      border-color: #2196f3;
    }
    &::placeholder {
      color: #b1b1b1;
      font-size: 1rem;
    }
  }
`;
export const StyledSubscribeinput = styled.input``;

export const StyledSubscribebutton = styled.button`
  padding: 0.9rem 1.8rem;
  @media (min-width: 480px) {
    margin-left: 1rem;
  }
`;

export const StyledSubscribeAlert = styled.p`
  padding-top: 1rem;
  color: white;
`;

export default FormWrapper;
