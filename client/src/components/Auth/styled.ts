import styled from 'styled-components';
import { Form } from '@components/Form';

const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const StyledActionButtons = styled.div`
  button:first-child {
    margin-right: 1.5rem;
  }
`;

const StyledUserButton = styled.div`
  position: relative;
  background: #6a7482;
  position: relative;
  padding: 10px;
  width: 35px;
  height: 35px;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 35px;
    fill: white;
    display: flex;
  }
`;

const StyledFormError = styled.div`
  margin: 2rem 0rem;
`;

const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

const StyledHeader = styled.div`
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 24px;
  line-height: 24px;
  color: #a1a7bb;
`;

export {
  StyledActions,
  StyledActionButtons,
  StyledUserButton,
  StyledForm,
  StyledFormError,
  StyledHeader,
};
