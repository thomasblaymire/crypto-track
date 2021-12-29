import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: inherit;
`;

const Content = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 1300px;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;

export interface LayoutProps {
  children?: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};
