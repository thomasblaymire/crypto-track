import React from 'react';
import { Layout } from '../Layout';
import { Loading } from '../Loading';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/fetch';
import styled from 'styled-components';

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

interface FetchCryptoCoinInterface {
  data?: any;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

export const CryptoDetails = (): JSX.Element => {
  const { crypto } = useParams();

  const { data, isLoading, hasError, errorMessage }: FetchCryptoCoinInterface =
    useFetch({
      initialUrl: `${process.env.COINGEKO_API}/search?query=${crypto}`,
      revalidate: false,
    });

  console.log('TOM data', data);

  return (
    <Layout>
      {isLoading && <Loading position="center" />}
      {data && (
        <StyledCryptoSection>
          <img src={data.coins[0].large} />
          <h2>{data.coins[0].name}</h2>
          <p>{data.coins[0].market_cap_rank}</p>
        </StyledCryptoSection>
      )}
    </Layout>
  );
};
