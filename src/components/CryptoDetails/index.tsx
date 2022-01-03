import React from 'react';
import { Layout } from '../Layout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface CryptoDetailsProps {}

const StyledCryptoName = styled.h2``;

export const CryptoDetails = ({}: CryptoDetailsProps): JSX.Element => {
  const params = useParams();

  console.log('TOM params', params);

  return (
    <Layout>
      BTC
      <StyledCryptoName>{params.crypto}</StyledCryptoName>
    </Layout>
  );
};
