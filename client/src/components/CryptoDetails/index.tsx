import React from 'react';
import { Layout } from '../Layout';
import { Loading } from '../Loading';
import { useParams, useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/fetch';
import styled from 'styled-components';

interface CryptoDetailsProps {}

const StyledCryptoSection = styled.section`
  padding-top: 4rem;

  h2 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: white;
    margin: 0;
  }
`;

const StyledCryptoName = styled.h2``;

export const CryptoDetails = ({}: CryptoDetailsProps): JSX.Element => {
  const { crypto } = useParams();
  const { state }: any = useLocation();

  const { data, isLoading, isErrors, errorMessage }: any = useFetch({
    initialUrl: `${process.env.COINMARKETCAP_SINGLE_CURRENCY}?slug=${crypto}&aux=logo,description`,
    initialHeaders: {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_KEY,
      },
    },
  });


  return (
    <Layout>
      {isLoading && <Loading position="center" />}
      {data && (
        <StyledCryptoSection>
          <img src={data.data[state].logo} />
          <h2>{data.data[state].name}</h2>
          <p>{data.data[state].description}</p>
        </StyledCryptoSection>
      )}
    </Layout>
  );
};
