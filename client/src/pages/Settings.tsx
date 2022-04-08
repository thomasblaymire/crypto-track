import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/UI/Layout';
import { AccountForm } from '@components/Forms/Account';
import { Button } from '@components/UI/Button';

const StyledSettings = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledBox = styled.div`
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  border: solid 1px #222531;
  border-radius: 5px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
`;

const StyledBoxHeader = styled.div`
  height: 98px;
  line-height: 100px;
  border-bottom: 1px solid #222531;
  padding: 0px 32px;
`;

const StyledBoxBody = styled.div`
  padding: 32px;
`;

const StyledBoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 98px;
  border-top: 1px solid #222531;
  padding: 0px 32px;
`;

const StyledBoxFooterLeft = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #848e9c;
    font-size: 15px;
  }

  &:first-child {
    font-size: 16px;
    font-weight: 600;
  }

  &:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;

const StyledResetButton = styled(Button)`
  height: 40px;
  font-size: 14px;
  padding: 0px 24px;
  line-height: 24px;
`;

export const Settings = (): JSX.Element => {
  return (
    <Layout>
      <StyledSettings>
        <StyledBox>
          <StyledBoxHeader>
            <h1>Account Settings</h1>
          </StyledBoxHeader>
          <StyledBoxBody>
            <AccountForm />
          </StyledBoxBody>
          <StyledBoxFooter>
            <StyledBoxFooterLeft>
              <div>Password</div>
              <span>
                Set a unique password to protect your personal account.
              </span>
            </StyledBoxFooterLeft>
            <StyledResetButton color="secondary">
              Change Password
            </StyledResetButton>
          </StyledBoxFooter>
        </StyledBox>
      </StyledSettings>
    </Layout>
  );
};
