import React from 'react';
import { Layout } from '../Layout';
import { Loading } from '../Loading';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
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

const StyledCard = styled.div`
  width: 100%;
  background: #13131d;

  padding: 3rem;
  font-size: 2rem;

  &:not(:last-child) {
    border-right: solid 1px #222231;
  }
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardBody = styled.div``;

const StyledCardRow = styled.div`
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 15px, rgb(0 0 0 / 5%) 0px 0px 4px;
  display: flex;
  width: 100%;
`;

const StyledCrypto = styled.div`
  display: flex;
  margin-bottom: 10rem;

  img {
    width: 10%;
    margin-right: 5rem;
  }
`;

const StyledSection = styled.section``;

const StyledCryptoGraph = styled.div``;

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
          <StyledCrypto>
            <img src={data.coins[0].large} />
            <h2>{data.coins[0].name}</h2>
            <p>{data.coins[0].market_cap_rank}</p>
          </StyledCrypto>

          <StyledCardRow>
            <StyledCard>
              <StyledCardHeader>
                <h4>Market Cap</h4>
                ICON
              </StyledCardHeader>
              <StyledCardBody>
                <h5>$275,890,432</h5>
                <span>UP 0.05%</span>
              </StyledCardBody>
            </StyledCard>
            <StyledCard>
              <StyledCardHeader>
                <h4>Market Cap</h4>
                ICON
              </StyledCardHeader>
              <StyledCardBody>
                <h5>$275,890,432</h5>
                <span>UP 0.05%</span>
              </StyledCardBody>
            </StyledCard>
            <StyledCard>
              <StyledCardHeader>
                <h4>Market Cap</h4>
                ICON
              </StyledCardHeader>
              <StyledCardBody>
                <h5>$275,890,432</h5>
                <span>UP 0.05%</span>
              </StyledCardBody>
            </StyledCard>
            <StyledCard>
              <StyledCardHeader>
                <h4>Market Cap</h4>
                ICON
              </StyledCardHeader>
              <StyledCardBody>
                <h5>$275,890,432</h5>
                <span>UP 0.05%</span>
              </StyledCardBody>
            </StyledCard>
          </StyledCardRow>

          <StyledSection>
            <StyledCryptoGraph>GRAPH HERE PLS</StyledCryptoGraph>
          </StyledSection>
        </StyledCryptoSection>
      )}
    </Layout>
  );
};
