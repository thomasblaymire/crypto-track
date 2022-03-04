import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { Layout } from '../Layout';
import { Loading } from '../Loading';
import { useQuery } from 'react-query';
import { SINGLE_COIN_QUERY_STRING } from '../../helpers/api';
import { useParams } from 'react-router-dom';
import { SingleCryptoCoin } from '../../types';
import { LineGraph } from '../LineGraph';

const StyledCryptoSection = styled.section`
  padding: 7rem 0;

  h2 {
    color: white;
    font-size: 3rem;
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
  margin-bottom: 10rem;
`;

const StyledCrypto = styled.div`
  display: flex;
  padding-bottom: 5rem;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 5rem;
  }
`;

const StyledLeftSection = styled.aside`
  max-width: 930px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StyledCryptoInformation = styled.div`
  font-size: 1.5rem;
  line-height: 35px;
  a {
    text-decoration: none;
    color: blue;
    color: #fff;
    text-decoration: none;
    &:hover {
      cursor: default;
    }
  }
`;

const StyledSection = styled.section``;

const StyledCryptoGraph = styled.div``;

interface FetchSingleCoinInterface {
  data?: SingleCryptoCoin;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
  isFetching: boolean;
}

const StyledLineGraph = styled(LineGraph)`
  margin-bottom: 7rem;
`;

export const CryptoDetails = (): JSX.Element => {
  const { crypto } = useParams();

  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
  }: FetchSingleCoinInterface = useQuery(
    ['crypto', crypto],
    async () => {
      const response = await fetch(
        `${process.env.COINGEKO_API}/${SINGLE_COIN_QUERY_STRING(crypto)}`
      );

      const data = await response.json();
      return data;
    },
    {
      retry: 5,
    }
  );

  ('//api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false');

  https: console.log('TOM data', data);

  return (
    <Layout>
      {isLoading && <Loading position="center" />}
      {data && (
        <StyledCryptoSection>
          <StyledCrypto>
            <img src={data.image.large} />
            <h2>{data.name}</h2>
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

          <StyledLeftSection>
            <StyledSection>
              <StyledLineGraph />
            </StyledSection>

            <StyledSection>
              <StyledCryptoInformation>
                {parse(data.description.en)}
              </StyledCryptoInformation>
              {/* {data.description.en} */}
            </StyledSection>
          </StyledLeftSection>
        </StyledCryptoSection>
      )}
    </Layout>
  );
};
